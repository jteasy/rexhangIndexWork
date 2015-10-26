var items = function(name,age){
	this.name = name;
	this.age = age;
};

items.prototype = {
	fun1:function(name,age){
		console.info('姓名是：' + name + ' - 年龄是：' + age);
	}
};

var obj = new items();
obj.fun1("rexhang",22);
