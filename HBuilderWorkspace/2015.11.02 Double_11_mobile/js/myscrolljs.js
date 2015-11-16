/*
 	=== info ===	 
 	* Filename: myscrolljs.js
 	* Decscription: myscrolljs
 	* Version: 1.0.0(2015.11.03)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */

function init(){
	var scroll_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	if(scroll_top >= 960){
		document.getElementById("fixd").style.display = 'block';
	} else{
		document.getElementById("fixd").style.display = 'none';
	}
};
window.addEventListener('scroll', init, false);

(function fixdScroll() {
	var fixd = document.getElementById("fixd");
	fixd.onclick = function() {
		document.body.scrollTop = 0;
		window.pageYOffset = 0;
		document.documentElement.scrollTop = 0;
	};
})();
