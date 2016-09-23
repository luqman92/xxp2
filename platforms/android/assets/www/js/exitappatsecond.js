
module.exports = {
   
    exitAppAtSecond : function () {
		var self = this;
		Cordova.exec(
			function (result) {
				if (result == "onExitAppAtSecond") {
					if (self.onExitAppAtSecond)
						self.onExitAppAtSecond();
						
					navigator.app.exitApp();						
				}
			},
            function (error) {
			},
			"ExitAppAtSecond",
			"exitAppAtSecond",
			[]
		);//success,fail,class,method,params
    },	
	onExitAppAtSecond: null
};
