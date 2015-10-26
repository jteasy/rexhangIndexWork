
var num = function(){
	
};

num.prototype = {
	add:function(count1,count2){
		return count1 + count2;
	},
	rem:function(count1,count2){
		return count1 - count2;
	}
};

var funs = new num();
alert(funs.add(3,88));
alert(funs.rem(3,88));


