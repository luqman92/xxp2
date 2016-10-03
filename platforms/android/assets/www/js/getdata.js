$(document).on("pagebeforeshow", "#home-page", function () {    

    $.getJSON('http://esdm.hol.es/getdatabuku.php', function(data) {
	/*$.getJSON('http://localhost/esdm/getdatabuku.php', function(data) {*/
            var output="";
            var newpage="";
            for (var i in data.items) {
                output+="<li>" + 
                "<a href=\"#page" + data.items[i].IdBuku + "\">" +
                "<img src=\"http://esdm.hol.es/img/" + data.items[i].LinkGambar +"\">" +
                //"<img src=\"http://localhost/esdm/img/" + data.items[i].LinkGambar +"\">" +
                "<h2>" + data.items[i].NamaBuku + "</h2>" +
                "<p>" + data.items[i].Deskripsi + "</p>" + "</a>" +
                "</li>";
                
                //see if page already exists in DOM
                if ($("#page" + data.items[i].IdBuku).length == 0) {
                  var strbook = data.items[i].Deskripsi;
                    newpage+="<div data-role=\"page\" id=\"page" + data.items[i].IdBuku + "\">";
                    newpage+="<div data-role=\"header\" data-theme=\"b\">"+ "<a data-role=\"button\" data-rel=\"back\" data-icon=\"back\">Back</a>" +"<h1>" + data.items[i].NamaBuku + "</h1></div>";
                   //newpage+="<div role=\"main\" class=\"ui-content\"><center><img src=\"http://esdm.hol.es/img/" + data.items[i].LinkGambar +"\" style=\"width: 100%;\"></center><p>" + strbook.substring(0,100) +  "</p><a href=\"#\" class=\"ui-btn ui-mini\" onClick=\"link()\">Read</a></div></div>";
                   newpage+="<div role=\"main\" class=\"ui-content\"><center><img src=\"http://esdm.hol.es/img/" + data.items[i].LinkGambar +"\" style=\"width: 100%;\"></center><p>" + strbook.substring(0,100) +  "</p><a href=\"http://esdm.hol.es/pdf/" + data.items[i].Link + "\" class=\"ui-btn ui-mini\">Read</a></div></div>";
                }
                
            }
            output+="";
            newpage += "";
            $('body').append(newpage);
            $("#mylist").html(output).listview('refresh');
    });
    
});

$(document).on("pagebeforeshow", "#home-page", function () {    

    $.getJSON('http://esdm.hol.es/getkategori.php', function(data) {
  /*$.getJSON('http://localhost/esdm/getkategori.php', function(data) {*/
            var output="";
            var newpage="";
            for (var i in data.items) {
                output+="<li>" + 
                "<a href=\"#LisKat" + data.items[i].IdKategori + "\"><span class=\"ui-li-count\">" + data.items[i].jmlbk + "</span>" +
                "<h3>" + data.items[i].NamaKategori + "</h3>" +
                "</li>";
                //console.log(data.items);
                //see if page already exists in DOM
               /* if ($("#LisKat" + data.items[i].IdBuku).length == 0) {
                    newpage+="<div data-role=\"page\" id=\"page" + data.items[i].IdBuku + "\">";
                    newpage+="<div data-role=\"header\">"+ "<a data-role=\"button\" data-rel=\"back\" data-icon=\"back\">Back</a>" +"<h3>" +  data.items[i].NamaBuku +  "</h3></div>";
                    newpage+="<div role=\"main\" class=\"ui-content\">" + data.items[i].Status +  "</div> </div>";
                }*/
            }
            output+="";
            newpage += "";
            $('body').append(newpage);
            $("#ListKategori").html(output).listview('refresh');
    });
    
});



/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
   // as soon as this function is called FileTransfer "should" be defined
   
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://www.i-drain.net/userfiles/file/einbauanleitung_iboard.pdf");
var fileURL = encodeURI("http://localhost/download/");

fileTransfer.download(
    uri,
    fileURL,
    function(entry) {
        console.log("download complete: " + entry.toURL());
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code" + error.code);
    },
    false,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);
    console.log(FileTransfer);
}*/

/*$(document).on('pagebeforeshow','#home-page',function() {
    $.getJSON("http://esdm.hol.es/getdatabuku.php",function(data){
        listbuku = data.items;
        console.log(listbuku);
      $.each(listbuku, function(i, field){
        $('#DataBuku').append('<li><a href="#pdfFile' + field.IdBuku + 'data-transition="flip"> ' +
        '<h2>' + field.NamaBuku + '</h2>'+
        '<p>'+ field.Deskripsi +'</p></a></li>');
     });
    });
 });*/

/*$(document).ready(function() {
    $.getJSON("http://esdm.hol.es/getkategori.php",function(result){
        listkategori = result.items;
        console.log(listkategori);
      $.each(listkategori, function(i, field){
        $('#Kategori').append('<li><a href="#pdfFile' + field.IdKategori + 'data-transition="flip"> ' +
        '<h2>' + field.NamaKategori + '</h2>'+
        '<p>'+ field.Status +'</p></a></li>');
     });
    });
 });*/

/*function openPDF(){
    window.open('http://www.i-drain.net/userfiles/file/einbauanleitung_iboard.pdf', '_blank', 'location=yes')
}*/

//document.addEventListener("deviceready", openPDF, false);
/*function openPDF() {

window.open('https://docs.google.com/viewer?url=http://www.i-drain.net/userfiles/file/einbauanleitung_iboard.pdf&embedded=true', '_self', 'location=yes'); 
ref = window.open('home.html', '_self');
 }*/

/*document.addEventListener('deviceready', function () {
    // cordova.plugins.SitewaertsDocumentViewer is now available
    SitewaertsDocumentViewer.canViewDocument(url, contentType, options, onPossible, onMissingApp, onImpossible, onError);
}, false);*/

//document.getElementById("downloadFile").addEventListener("click", downloadFile);
/*function downloadFile() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("http://s14.postimg.org/i8qvaxyup/bitcoin1.jpg");
   var fileURL =  "///storage/emulated/0/DCIM/myFile";

   fileTransfer.download(
      uri, fileURL, function(entry) {
         console.log("download complete: " + entry.toURL());
      },
		
      function(error) {
         console.log("download error source " + error.source);
         console.log("download error target " + error.target);
         console.log("download error code" + error.code);
      },
		
      false, {
         headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
         }
      }
   );
}*/
/*function downloadPDF() {
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://localhost/smartbook/pdf/esdm.pdf");

fileTransfer.download(
    uri,
    fileURL,
    function(entry) {
        console.log("download complete: " + entry.toURL());
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code" + error.code);
    },
    false,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);
}*/

 function check(){
         
         var un = document.getElementById('username').value;
       var action = 'check';
$.getJSON(domain+'/json_backend.php?callback=?','un='+un+'&action='+action,function(res){

  //document.write('<b>'+res.status+'</b><br>');
   document.getElementById('result').innerHTML = '<b>'+res.status+'</b>';

});
           
       }
       
        function login(){
           
       var un = document.getElementById("username").value;
       var pw = document.getElementById("password").value;
       
       //The action
       var action = 'login';
    $.getJSON(domain+'/json_backend.php?callback=?','un='+un+'&pw='+pw+'&action='+action,function(res){
        
        if(res.status=="logged-in"){
            document.addEventListener("deviceready", onDeviceReady, false);
            localStorage.setItem("username", un);
            localStorage.setItem("password", pw);
            window.location = "main.html";
            document.getElementById("uname").innerHTML = localStorage.getItem("username");
            document.getElementById("pwd").innerHTML = localStorage.getItem("password");
            //console.log(localStorage.getItem("username"));
            
        }
        else{
            document.getElementById('message').innerHTML = '<b>'+res.status+'</b>';
        }
    });
}
        function forgot(){
           
       var em = document.getElementById("email").value;
       
       //The action
       var action = 'forgot';
       
    $.getJSON(domain+'/json_backend.php?callback=?','em='+em+'&action='+action,function(res){

      document.write('<b>'+res.status+'</b><br>');

    });
}
       
       function signup(){
           var un = document.getElementById('username').value;
       
       var em = document.getElementById('email').value;
       var pw = document.getElementById('password').value;
       var pw2 = document.getElementById('password2').value;
       var action = 'reg';
       if(document.getElementById('email').value == '' || document.getElementById('username').value =='' ||document.getElementById('password').value =='' ||document.getElementById('password2').value ==''){
           document.getElementById('message').innerHTML ='<b>All fields must be compleated</b>';
       }
       else{
       if(pw==pw2){
           $.getJSON(domain+'/json_backend.php?callback=?','un='+un+'&pw='+pw+'&em='+em+'&action='+action,function(res){
               
            
             if(res.status =='Please enter a valid email address'){
                         document.getElementById('message').innerHTML ='<b>'+res.status+'</b>';
             }
                         else{
                            document.getElementById('message').innerHTML ='<b>'+res.status+'</b>';
                            document.getElementById('email').value ='';
                            document.getElementById('username').value ='';
                            document.getElementById('password').value ='';
                            document.getElementById('password2').value ='';
                            document.getElementById('result').innerHTML = '';
             }
                         if(res.status =='Email is already in use'){
                         document.getElementById('message').innerHTML ='<b>'+res.status+'</b>';
                         }
             else{
                            document.getElementById('message').innerHTML ='<b>'+res.status+'</b>';
                            document.getElementById('email').value ='';
                            document.getElementById('username').value ='';
                            document.getElementById('password').value ='';
                            document.getElementById('password2').value ='';
                            document.getElementById('result').innerHTML = '';
             }

});
           }
           else{
                       document.getElementById('passw').innerHTML = '<b>Passwords do not match</b>';
                       document.getElementById('message').innerHTML ='';
                       document.getElementById('result').innerHTML = '';
           }
       }
       

       }

     function logout()
     {  
      document.addEventListener("deviceready", logOutReady, false);
          
     }
     function logOutReady(){
      window.localStorage.removeItem("username");
          window.localStorage.removeItem("password");
          window.location = "index.html";
     }
function link(){
  document.location="login.html";
}

function onError() {
	alert('Under construction');
    window.location.href = 'index.html';
}
