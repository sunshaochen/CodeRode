// 流星类
;(function(){
 	window.Star = function(){
 		this.initPos = {x:0,y:0};
 		this.points = [];
 		this.id = guid();

 	}
 	Star.prototype.init = function(){
 		this.initX();
 		this.createPoints();
 	};
 	Star.prototype.update = function(){
 		this.initPos.x -= 30;
 		this.initPos.y += 15;
 		this.points = [];
 		this.createPoints(); 
 	};
 	Star.prototype.initX = function(argument){
 		this.initPos.x = randomNum(400,1200);
 	};
 	Star.prototype.createPoints = function(){
 		this.points.push({
 			x: this.initPos.x,
 			y: this.initPos.y
 		});
 		this.points.push({
 			x: this.initPos.x+10,
 			y: this.initPos.y
 		});
 		this.points.push({
 			x: this.initPos.x-10,
 			y: this.initPos.y
 		});
 		this.points.push({
 			x: this.initPos.x,
 			y: this.initPos.y+10
 		});
 		this.points.push({
 			x: this.initPos.x,
 			y: this.initPos.y-10
 		});

 		for (var i = 1; i < 6; i++) {
 			this.points.push({
	 			x: this.initPos.x+i*20,
	 			y: this.initPos.y-i*10,
	 			text: '.'
	 		});
 		}
 	}


	//用于生成uuid
	function S4() {
	    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}
	function guid() {
	    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}

	function randomNum(minNum,maxNum){ 
	    switch(arguments.length){ 
	        case 1: 
	            return parseInt(Math.random()*minNum+1,10); 
	        break; 
	        case 2: 
	            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
	        break; 
	            default: 
	                return 0; 
	            break; 
	    } 
	} 

})();