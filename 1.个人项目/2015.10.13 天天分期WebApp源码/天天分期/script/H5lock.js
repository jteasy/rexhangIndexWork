(function(){
        window.H5lock = function(obj){
            this.height = obj.height;
            this.width = obj.width;
            this.chooseType = Number($api.getStorage('chooseType')) || obj.chooseType;
        };
 
 
        H5lock.prototype.drawCle = function(x, y) { // 初始化解锁密码面板
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.r, 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.stroke();
        }
        H5lock.prototype.drawPoint = function() { // 初始化圆心
            for (var i = 0 ; i < this.lastPoint.length ; i++) {
                this.ctx.fillStyle = '#ffffff';
                this.ctx.beginPath();
                this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r / 2, 0, Math.PI * 2, true);
                this.ctx.closePath();
                this.ctx.fill();
            }
        }
        
        H5lock.prototype.reDrawPoint = function(color) { // 改变圆心颜色
            for (var i = 0 ; i < this.lastPoint.length ; i++) {
                this.ctx.fillStyle = color;
                this.ctx.beginPath();
                this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r / 2, 0, Math.PI * 2, true);
                this.ctx.closePath();
                this.ctx.fill();
            }
        }
        H5lock.prototype.drawStatusPoint = function(type) { // 初始化状态线条
            for (var i = 0 ; i < this.lastPoint.length ; i++) {
                this.ctx.strokeStyle = type;
                this.ctx.beginPath();
                this.ctx.lineWidth=3;
                this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r, 0, Math.PI * 2, true);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
        H5lock.prototype.drawLine = function(po, lastPoint) {// 解锁轨迹
            this.ctx.beginPath();
            this.ctx.lineWidth = 7;
            this.ctx.moveTo(this.lastPoint[0].x, this.lastPoint[0].y);
            console.log(this.lastPoint.length);
            for (var i = 1 ; i < this.lastPoint.length ; i++) {
                this.ctx.lineTo(this.lastPoint[i].x, this.lastPoint[i].y);
            }
            this.ctx.lineTo(po.x, po.y);
            this.ctx.stroke();
            this.ctx.closePath();
 
        }
        H5lock.prototype.createCircle = function() {// 创建解锁点的坐标，根据canvas的大小来平均分配半径
 
            var n = this.chooseType;
            var count = 0;
            this.r = this.ctx.canvas.width / (2 + 4 * n);// 公式计算
            this.lastPoint = [];
            this.arr = [];
            this.restPoint = [];
            var r = this.r;
            for (var i = 0 ; i < n ; i++) {
                for (var j = 0 ; j < n ; j++) {
                    count++;
                    var obj = {
                        x: j * 4 * r + 3 * r,
                        y: i * 4 * r + 3 * r,
                        index: count
                    };
                    this.arr.push(obj);
                    this.restPoint.push(obj);
                }
            }
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            for (var i = 0 ; i < this.arr.length ; i++) {
                this.drawCle(this.arr[i].x, this.arr[i].y);
            }
            //return arr;
        }
        H5lock.prototype.getPosition = function(e) {// 获取touch点相对于canvas的坐标
            var rect = e.currentTarget.getBoundingClientRect();
            var po = {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
              };
            return po;
        }
        H5lock.prototype.update = function(po) {// 核心变换方法在touchmove时候调用
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
 
            for (var i = 0 ; i < this.arr.length ; i++) { // 每帧先把面板画出来
                this.drawCle(this.arr[i].x, this.arr[i].y);
            }
 
            this.drawPoint(this.lastPoint);// 每帧花轨迹
            this.drawLine(po , this.lastPoint);// 每帧画圆心
 
            for (var i = 0 ; i < this.restPoint.length ; i++) {
                if (Math.abs(po.x - this.restPoint[i].x) < this.r && Math.abs(po.y - this.restPoint[i].y) < this.r) {
                    this.drawPoint(this.restPoint[i].x, this.restPoint[i].y);
                    this.lastPoint.push(this.restPoint[i]);
                    this.restPoint.splice(i, 1);
                    break;
                }
            }
 
        }
        H5lock.prototype.checkPass = function(psw1, psw2) {// 检测密码
            var p1 = '',
            p2 = '';
            for (var i = 0 ; i < psw1.length ; i++) {
                p1 += psw1[i].index + psw1[i].index;
            }
            for (var i = 0 ; i < psw2.length ; i++) {  
                p2 += psw2[i].index + psw2[i].index;
            }
            return p1 === p2;
        }
        H5lock.prototype.storePass = function(psw) {// touchend结束之后对密码和状态的处理
            if (this.pswObj.step == 1) {
                if (this.checkPass(this.pswObj.fpassword, psw)) {
                    this.pswObj.step = 2;
                    this.pswObj.spassword = psw;
                    document.getElementById('title').innerHTML = '密码保存成功';
                    this.drawStatusPoint('#2CFF26');
                    //window.localStorage.setItem('passwordxx', JSON.stringify(this.pswObj.spassword));
                   // window.localStorage.setItem('chooseType', this.chooseType);
                   $api.setStorage('passwordxx',JSON.stringify(this.pswObj.spassword));
                   $api.setStorage('chooseType',this.chooseType);
                   //重新设置手势密码
                    api.alert({
                    	msg:'手势设置成功！'
                    },function(ret,err){
                    	if(ret){
                    		var $json=JSON.parse($api.getStorage('passwordxx'));
                    		for (var $x in $json){
                    			var $little_circle=$api.domAll('#little_circle');
                    			$api.addCls($little_circle[($json[$x].index-1)],'active');
                    		};
                    			api.closeWin({
                                	name:'changegesturepw',
                                	animation:{
                                		duration:0
                                	}
                    			});
                    	}
                    });
                } else {
                    document.getElementById('title').innerHTML = '与首次绘制不一致，请再次绘制';
                    this.drawStatusPoint('#2cff26');
                    delete this.pswObj.step;
                }
            } else if (this.pswObj.step == 2) {
                if (this.checkPass(this.pswObj.spassword, psw)) {
                    document.getElementById('title').innerHTML = '解锁成功';
                    this.drawStatusPoint('#2CFF26');
                    this.updatePassword();
                } else {
                    this.drawStatusPoint('#ff6666');//画圆外
                    this.reDrawPoint('#ff6666');//画圆心
                    document.getElementById('title').innerHTML = '绘制解锁图案';
                }
            } else {
                this.pswObj.step = 1;
                this.pswObj.fpassword = psw;
                document.getElementById('title').innerHTML = '请再次绘制手势密码';
                var first_pw=this.pswObj.fpassword;
                //对上面的小九宫格做轨迹显示
                for (var $x in first_pw){
        			var $little_circle=$api.domAll('#little_circle');
        			$api.addCls($little_circle[(first_pw[$x].index)-1],'active');
        		};
            }
 
        }
        //手势解锁
        H5lock.prototype.makeState = function() {
            if (this.pswObj.step == 2) {
                document.getElementById('updatePassword').style.display = 'block';
                //document.getElementById('chooseType').style.display = 'none';
                document.getElementById('title').innerHTML = '请解锁';
            } else if (this.pswObj.step == 1) {
                //document.getElementById('chooseType').style.display = 'none';
                document.getElementById('updatePassword').style.display = 'none';
            } else {
                document.getElementById('updatePassword').style.display = 'none';
                //document.getElementById('chooseType').style.display = 'block';
            }
        }
        H5lock.prototype.setChooseType = function(type){
            chooseType = type;
            init();
        }
        H5lock.prototype.updatePassword = function(){
            //window.localStorage.removeItem('passwordxx');
            $api.rmStorage('passwordxx');
            $api.rmStorage('chooseType');
            this.pswObj = {};
            document.getElementById('title').innerHTML = '绘制新解锁图案';
            this.reset();
        }
        H5lock.prototype.initDom = function(){
        	var winwidth=api.winWidth;
        	winwidth=winwidth*0.8;
            var wrap = document.getElementById("content");
            var str = '<a id="updatePassword" style="position: absolute;right: 5px;top: 5px;color:#fff;font-size: 10px;display:none;"></a>'+
                      '<canvas id="canvas" width="309" height="309"></canvas>';
            //wrap.setAttribute('style','position: absolute;top:0;left:0;right:0;bottom:0;');
            wrap.innerHTML = str;
            //document.body.appendChild(wrap);
        }
        H5lock.prototype.init = function() {
            this.initDom();
            this.pswObj =$api.getStorage('passwordxx') ? {
                step: 2,
                spassword: JSON.parse($api.getStorage('passwordxx'))
            } : {};
            this.lastPoint = [];
            this.makeState();
            this.touchFlag = false;
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.createCircle();
            this.bindEvent();
        }
        H5lock.prototype.reset = function() {
            this.makeState();
            this.createCircle();
        }
        H5lock.prototype.bindEvent = function() {
            var self = this;
            this.canvas.addEventListener("touchstart", function (e) {
                e.preventDefault();// 某些android 的 touchmove不宜触发 所以增加此行代码
                 var po = self.getPosition(e);
                 console.log(po);
                 for (var i = 0 ; i < self.arr.length ; i++) {
                    if (Math.abs(po.x - self.arr[i].x) < self.r && Math.abs(po.y - self.arr[i].y) < self.r) {
 
                        self.touchFlag = true;
                        self.drawPoint(self.arr[i].x,self.arr[i].y);
                        self.lastPoint.push(self.arr[i]);
                        self.restPoint.splice(i,1);
                        break;
                    }
                 }
             }, false);
             this.canvas.addEventListener("touchmove", function (e) {
                if (self.touchFlag) {
                    self.update(self.getPosition(e));
                }
             }, false);
             this.canvas.addEventListener("touchend", function (e) {
                 if (self.touchFlag) {
                     self.touchFlag = false;
                     self.storePass(self.lastPoint);
                     setTimeout(function(){
 
                        self.reset();
                    }, 300);
                 }
 
 
             }, false);
             document.addEventListener('touchmove', function(e){
                e.preventDefault();
             },false);
             document.getElementById('updatePassword').addEventListener('click', function(){
                 self.updatePassword();
              });
        }
})();