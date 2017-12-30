;(function(){
	window.Moon = function(){
		this.centerPos = {x:190,y:700};	
		this.radius = 12;
		this.points = [];
		this.radiusLength = 10*this.radius;
	};

	Moon.prototype.createPoints = function(){
		this.points = [];
		this.radiusLength = 10*this.radius;
		var xMinRange = this.centerPos.x-this.radius*10,
			xMaxRange = this.centerPos.x+this.radius*10,
			yMinRange = this.centerPos.y-this.radius*10,
			yMaxRange = this.centerPos.y+this.radius*10;
		for(var i = 0; i<= this.radius*2; i++){
			for(var j = 0; j<=this.radius*2; j++){
				var x = xMinRange+10*j;
				var y = yMinRange+10*i;
				// if(Math.sqrt(Math.pow(x-this.centerPos.x, 2) + Math.pow(y-this.centerPos.y, 2))<=this.radiusLength){
					this.points.push({x: x,y: y});
				// }
			}
		}
	}
})();