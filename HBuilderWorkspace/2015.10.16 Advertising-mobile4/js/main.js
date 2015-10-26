document.addEventListener('touchstart', function() {}, false);

// var sH = document.body.clientHeight;
// document.getElementById("id_plus").style.height = sH + "px";


var pls = document.createElement("div");
pls.id = "rexhang";
pls.style.width = "100%";
pls.style.height = "3191px";
pls.style.background = "rgba(0,0,0,0.5)";
pls.style.position = "fixed";
pls.style.left = "0";
pls.style.top = "0";
pls.style.opacity = 0;
pls.style.zIndex = -2;
document.body.appendChild(pls);

var redb = document.createElement("div");
redb.id = "id_redbag";
redb.setAttribute("class","redbag");
document.body.appendChild(redb);

var id_re = document.createElement("div");
id_re.id = "id_redbag_btn";
id_re.setAttribute("class","redbag-btn");
id_re.setAttribute("onclick","rexclickback()");
document.body.appendChild(id_re);

var goh = document.createElement("div");
goh.innerHTML = "去领取"
goh.setAttribute("class","gohave");
id_re.appendChild(goh);


function rexclick(){
	document.getElementById("id_redbag").style.opacity = 1;
	document.getElementById("id_redbag").style.transform = "rotate(360deg) scale(1)";
	document.getElementById("id_redbag").style.webkitTransform = "rotate(360deg) scale(1)";
	document.getElementById("id_redbag_btn").style.opacity = 1;
	document.getElementById("id_redbag_btn").style.transform = "rotate(360deg) scale(1)";
	document.getElementById("id_redbag_btn").style.webkitTransform = "rotate(360deg) scale(1)";
	document.getElementById("id_go").style.zIndex = "0";
	pls.style.opacity = 1;
	pls.style.zIndex = 1;
}

function rexclickback(){
	document.getElementById("id_redbag").style.opacity = 0;
	document.getElementById("id_redbag").style.transition = "0.4s";
	document.getElementById("id_redbag").style.webkitTransition = "0.4s";
	document.getElementById("id_redbag").style.transform = "rotate(0deg) scale(.3)";
	document.getElementById("id_redbag").style.webkitTransform = "rotate(0deg) scale(.3)";
	document.getElementById("id_redbag_btn").style.opacity = 0;
	document.getElementById("id_redbag_btn").style.transition = "0.4s";
	document.getElementById("id_redbag_btn").style.webkitTransition = "0.4s";
	document.getElementById("id_redbag_btn").style.transform = "rotate(0deg) scale(.3)";
	document.getElementById("id_redbag_btn").style.webkitTransform = "rotate(0deg) scale(.3)";
	document.getElementById("id_go").style.zIndex = "9999999";
	pls.style.opacity = 0;
	pls.style.zIndex = -2;
}