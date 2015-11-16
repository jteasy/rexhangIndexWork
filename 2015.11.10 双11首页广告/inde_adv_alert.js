/*
 	=== info ===	 
 	* Filename: inde_adv_alert.js
 	* Decscription: inde_adv_alert
 	* Version: 1.0.0(2015.11.10)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
 $(function(){
 	var lightPicDom = document.createElement("div");
 	lightPicDom.setAttribute("class","light-pic");
 	lightPicDom.style.width = "846px";
 	lightPicDom.style.height = "846px";
 	/*lightPicDom.style.border = "2px solid red";*/
 	lightPicDom.style.position = "fixed";
 	lightPicDom.style.top = "50%";
 	lightPicDom.style.left = "50%";
 	lightPicDom.style.marginLeft = "-423px";
 	lightPicDom.style.marginTop = "-423px";
 	document.body.appendChild(lightPicDom);
 	/* ----------------------------------------------------- */
 	var suspensionPicDom = document.createElement("div");
 	suspensionPicDom.setAttribute("class","suspension-pic");
 	suspensionPicDom.style.width = "1100px";
 	suspensionPicDom.style.height = "582px";
 	/*suspensionPicDom.style.border = "2px solid green";*/
 	suspensionPicDom.style.position = "fixed";
 	suspensionPicDom.style.top = "50%";
 	suspensionPicDom.style.left = "50%";
 	suspensionPicDom.style.marginLeft = "-550px";
 	suspensionPicDom.style.marginTop = "-291px";
 	document.body.appendChild(suspensionPicDom);
 	/* ----------------------------------------------------- */
 	var aDom = document.createElement("a");
 	aDom.setAttribute("class","a-pic");
 	aDom.style.width = "50px";
 	aDom.style.height = "50px";
 	/*aDom.style.border = "2px solid #000";*/
 	aDom.style.position = "fixed";
 	aDom.style.top = "50%";
 	aDom.style.left = "50%";
 	aDom.style.marginLeft = "318px";
 	aDom.style.marginTop = "-257px";
 	document.body.appendChild(aDom);
 	/* ----------------------------------------------------- */

 	$(".light-pic").css({
 		'background':"url('img/light.png') no-repeat center",
 		"z-index":'997'
 	});
 	/* ----------------------------------------------------- */
 	$(".suspension-pic").css({
 		'background':"url('img/suspension.png') no-repeat center",
 		"z-index":'998'
 	});
 	/* ----------------------------------------------------- */
 	$(".a-pic").css({
 		"z-index":'999'
 	});
 	/* ----------------------------------------------------- */
 	$(".a-pic").click(function(){
 		$(".light-pic , .suspension-pic ,.a-pic").remove();
 	});
 });