var people = function(param){
	this.name = param.name;
	this.age = param.age;
};

people.prototype = {
	fun1:function(){
		console.log(this.name);
	},
	fun2:function(){
		console.log(this.age);
	}
};

var proto = new people({
	name:'顾航',
	age:22
});

proto.fun1();
proto.fun2();

var rexhang = document.getElementsByClassName("rexhang");
alert(rexhang[0].innerHTML);