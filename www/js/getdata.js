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
	
	
	
    $.getJSON('http://esdm.hol.es/getkategori.php', function(data) {
  /*$.getJSON('http://localhost/esdm/getkategori.php', function(data) {*/
            var output="";
            var newpage="";
            for (var i in data.items) {
                output+="<li>" + 
                "<a href=\"#LisKat" + data.items[i].IdKategori + "\"><span class=\"ui-li-count\">" + data.items[i].jmlbk + "</span>" +
                "<h3>" + data.items[i].NamaKategori + "</h3>" +
                "</a></li>";
            }
			
			if ($("#LisKat" + data.items[i].IdKategori).length == 0) {
                  //var strkategori = data.items[i].NamaKategori;
                    newpage+="<div data-role=\"LisKat\" id=\"LisKat" + data.items[i].IdKategori + "\">test</div>";
                    //newpage+="<div data-role=\"header\" data-theme=\"b\">"+ "<a data-role=\"button\" data-rel=\"back\" data-icon=\"back\">Back</a>" +"<h1>" + data.items[i].NamaKategori + "</h1></div>";
                    //newpage+="<div role=\"main\" class=\"ui-content\"><p>" + strbook.substring(0,100) +  "</p></div></div>";
                }
			
            output+="";
            newpage += "";
            $('body').append(newpage);
            $("#ListKategori").html(output).listview('refresh');
    });
    
});





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
