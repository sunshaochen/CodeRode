;(function(){
	function CodeRood(){
	}

	CodeRood.prototype.init = function(){
		this.cacheVal();
		this.resizeCanvas();
		this.paint();
		this.flashCursor();
	};

	CodeRood.prototype.cacheVal = function(){
		this.$canvas = document.querySelector('#mainCanvas');

		this.$cursor = document.querySelector('#cursor');

		this.context = this.$canvas.getContext('2d');
		this.color = '#00BF00'; // 字体颜色
		this.lastTime = 0;
		this.lastCreateStarTime = 0;
		this.stars = {};
		this.moon;
	};	
	CodeRood.prototype.flashCursor = function(){
		var _this = this;
		setInterval(function(){
			_this.$cursor.style.display != 'none'?
				_this.$cursor.style.display='none':
				_this.$cursor.style.display = 'block';
		}, 600)
		
	};
	CodeRood.prototype.loadPoem = function(){
	};

	CodeRood.prototype.resizeCanvas = function(){
		// this.$canvas.width = document.body.clientWidth;
		// this.$canvas.height = document.body.clientHeight;
	};

	CodeRood.prototype.paint = function(){
		
		// for (var i = 0; i < points[0].length; i++) {
			
		// 	var code = new CodeSprite({x:points[0][i][0],y:points[0][i][1]});
		// 	code.paint(this.context);
		// }

		this.drawStar();
		this.moon = new Moon();
		this.moon.createPoints();
		this.drawMoon();
		// this.us = new Us();
		// this.us.createPoints();
		window.requestNextAnimationFrame(this.animate.bind(this));
	}

	CodeRood.prototype.animate = function(time){
		if(time - this.lastTime>=150){
			this.context.clearRect(0,0,this.$canvas.width,this.$canvas.height);
			this.drawMoon();
			// this.drawUs();
			this.drawStar(time);
			// this.dorwLines();
			this.lastTime = time;
		}
		window.requestNextAnimationFrame(this.animate.bind(this));
	}

	// CodeRood.prototype.drawUs = function(){
	// 	var points = this.us.points;
	// 	for (var i = 0; i < points.length; i++) {
	// 		var code = new CodeSprite({x:points[i]['x'],y:points[i]['y']});//, points[i]['text']? points[i]['text']:null
	// 		code.paint(this.context);
	// 	}
	// };

	CodeRood.prototype.drawMoon = function(){
		var points = this.moon.points;                                   
		for (var i = 0; i < points.length; i++) {
			var code = new CodeSprite({x:points[i]['x'],y:points[i]['y']})
			code.paint(this.context);
		}
		this.context.save();
		this.context.fillStyle='#000';
		this.context.beginPath();
		this.context.arc(this.moon.centerPos.x+this.moon.radisLength, this.moon.centerPos.y, this.moon.radisLength/1.3, 0, Math.PI*2);
		// this.context.stroke();
		this.context.fill();
		this.context.restore();
		this.context.save();
		this.context.strokeStyle="#000";
		this.context.lineWidth = 100;
		this.context.beginPath();
		this.context.arc(this.moon.centerPos.x, this.moon.centerPos.y, this.moon.radisLength+50, 0, Math.PI*2);
		this.context.stroke();
		this.context.restore();

	};

	CodeRood.prototype.drawStar = function(time){
		var i = 0;
		var star;
		for(id in this.stars){
			star = this.stars[id];
			star.update();
			if(star.points[star.points.length-1].x<0){
				delete this.stars[id];
			}else {
				for (i = 0; i < star.points.length; i++) {
					var code = new CodeSprite({x:star.points[i].x,y:star.points[i].y}, star.points[i].text? star.points[i].text:null);
					code.paint(this.context);
				}
			}
			
		}
		if(time - this.lastCreateStarTime>500){
			star = new Star();
			star.init();
			for (i = 0; i < star.points.length; i++) {
				var code = new CodeSprite({x:star.points[i].x,y:star.points[i].y}, star.points[i].text? star.points[i].text:null);
				code.paint(this.context);
			}
			this.stars[star.id] = star;
			this.lastCreateStarTime = time;
		}
	

	}

	// CodeRood.prototype.dorwLines = function(){
	// 	var endPoint = {x: this.$canvas.width, y: this.$canvas.height};
	// 	this.context.save();
	// 	this.context.strokeStyle='#ED1C24';
	// 	this.context.lineWidth = 3;
	// 	this.context.moveTo(endPoint.x,endPoint.y);
	// 	this.context.lineTo(endPoint.x-50,endPoint.y-70);
	// 	this.context.stroke();
	// 	this.context.fill();
	// 	this.context.restore();
	// };

	var codeRood = new CodeRood();
	codeRood.init();
})();





// var str = '';
// for(var i = 90; i <=560 ;i+=10){
// 	for(var j =0 ; j <=310 ; j+=10){
// 		str += '['+j+','+i+'],';
// 	}
	
// }
// console.log(str);