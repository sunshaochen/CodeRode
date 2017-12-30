;(function(){
	window.Moon = function(){
		this.centerPos = {x:80,y:90};	
		this.radis = 5;
		this.points = [];
		this.radisLength = 10*this.radis;
	};

	Moon.prototype.createPoints = function(){
		var xMinRange = this.centerPos.x-this.radis*10,
			xMaxRange = this.centerPos.x+this.radis*10,
			yMinRange = this.centerPos.y-this.radis*10,
			yMaxRange = this.centerPos.y+this.radis*10;
		for(var i = 0; i<= this.radis*2; i++){
			for(var j = 0; j<=this.radis*2; j++){
				var x = xMinRange+10*j;
				var y = yMinRange+10*i;
				// if(Math.sqrt(Math.pow(x-this.centerPos.x, 2) + Math.pow(y-this.centerPos.y, 2))<=this.radisLength){
					this.points.push({x: x,y: y});
				// }
			}
		}
	}
})();