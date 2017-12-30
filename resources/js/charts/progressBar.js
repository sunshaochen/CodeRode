;(function($){
	$.fn.extend({
		progressBar:function(opts){
			var _this = this;
			_this.value = opts.minValue;
			_this.outR = 0.96;
			_this.innerR = 0.7;
			_this.speed = 0;
			if(opts.width){
				_this.width(opts.width);
			}
			if(opts.height){
				_this.height(opts.height);
			}
			_this.maxWidth = _this.width()<_this.height()?_this.width():_this.height();
			_this.baseColor = '0,205,254';
			if(opts.baseColor){
				_this.baseColor = opts.baseColor;
			}
			
			_this.progress = {
				curVal : opts.minValue,
				lastAdvance: 0,
				execute : function(sprite,context,time){
					if(this.lastAdvance==0){
						this.lastAdvance=time;
					}
					if(this.curVal<_this.value){
						this.curVal+=(_this.value-opts.minValue)*(time-this.lastAdvance)/1000;
					}
					sprite.paint(context);
					this.lastAdvance = time;
				}
			};
			
			_this.init = function(){
				_this.children().remove();
				_this.append('<canvas width='+_this.width()+' height='+_this.height()+'>Canvas not supported</canvas>');
				_this.canvas = _this.find('canvas');
				_this.context = _this.canvas[0].getContext('2d');
				_this.progress.curVal -= 1;
				_this.outBg = new Sprite('outBg',{
					paint:function(sprite,context){
						context.save();
						context.lineWidth = 2;
						context.strokeStyle = 'rgba('+_this.baseColor+',1)';
						context.fillStyle = '#eee';
						context.beginPath();
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*_this.outR,Math.PI*0.2,-Math.PI*1.2,true);//外边框
						context.lineTo(sprite.left-_this.maxWidth/2*_this.innerR*Math.cos(Math.PI*0.2),sprite.top+_this.maxWidth/2*_this.innerR*Math.sin(Math.PI*0.2));
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*_this.innerR,-Math.PI*1.2,Math.PI*0.2,false);//内边框
						
//						context.moveTo(sprite.left+_this.maxWidth/2*_this.innerR*Math.cos(Math.PI*0.2),sprite.top+_this.maxWidth/2*_this.innerR*Math.sin(Math.PI*0.2));
						context.lineTo(sprite.left+_this.maxWidth/2*_this.outR*Math.cos(Math.PI*0.2),sprite.top+_this.maxWidth/2*_this.outR*Math.sin(Math.PI*0.2));
						context.stroke();
						context.fill();
						context.beginPath();

						context.lineWidth = 4;
						context.strokeStyle = 'rgba('+_this.baseColor+',1)';
						context.beginPath();
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*_this.innerR*0.9,Math.PI*0.2,-Math.PI*1.2,true);//内粗边框
						context.stroke();
						
   					context.beginPath();
 						
 						
   					context.beginPath(); //分割线
						context.lineWidth = 5;
						context.strokeStyle = 'rgba('+_this.baseColor+',1)';
						context.moveTo(sprite.left+_this.maxWidth/2*_this.innerR*Math.cos(Math.PI*0.2),sprite.top+_this.maxWidth/2*_this.innerR*Math.sin(Math.PI*0.2));
						context.lineTo(sprite.left-_this.maxWidth/2*_this.innerR*Math.cos(Math.PI*0.2),sprite.top+_this.maxWidth/2*_this.innerR*Math.sin(Math.PI*0.2));
						context.stroke();
						
						//------------------标题
						context.restore();
						context.beginPath();
						context.textAlign = 'center',
						context.textBaseline = 'top';
						context.font = 'normal '+ _this.maxWidth/2*(_this.outR-_this.innerR)+ 'px Microsoft YaHei';
						context.fillStyle = 'rgba('+_this.baseColor+',1)';
						context.fillText(opts.title,sprite.left,sprite.top+_this.maxWidth/2*_this.innerR*Math.sin(Math.PI*0.2)+6);
						
						context.save();
						// -------最小值
						context.beginPath();
						context.textAlign = 'end',
						context.textBaseline = 'alphabetic';
						context.font = 'normal '+ _this.maxWidth/2*(_this.outR-_this.innerR)*0.5+ 'px Microsoft YaHei';
						context.fillStyle = 'rgba('+_this.baseColor+',1)';
						context.fillText(opts.minValue,sprite.left-_this.maxWidth/2*0.8*Math.cos(Math.PI*0.2),sprite.top+_this.maxWidth/2*0.8*Math.sin(Math.PI*0.2));
						
						context.textAlign = 'start',
						context.textBaseline = 'alphabetic';
						context.fillText(opts.maxValue,sprite.left+_this.maxWidth/2*0.8*Math.cos(Math.PI*0.2),sprite.top+_this.maxWidth/2*0.8*Math.sin(Math.PI*0.2));
						
						context.restore();
					}
					
				});
				
					
				//----------------------进度条
				_this.showProgress = new Sprite('showProgress',{
					paint:function(sprite,context){
						sprite.animating = true;
						context.save();
 						context.beginPath();
						context.lineWidth = _this.maxWidth/2*(_this.outR-_this.innerR);
 						var curAng = (_this.progress.curVal-opts.minValue)/(opts.maxValue-opts.minValue)*360*0.7;
						var left = parseInt(sprite.left+_this.maxWidth/2*(_this.outR+_this.innerR)/2*Math.cos((-1.2*180+curAng)*Math.PI/180));
						var top = parseInt(sprite.top+_this.maxWidth/2*(_this.outR+_this.innerR)/2*Math.sin((-1.2*180+curAng)*Math.PI/180));
 						_this.gradient = context.createRadialGradient(left,top,40,left,top,_this.maxWidth*1.5);
 						_this.gradient.addColorStop(0,'rgba('+_this.baseColor+',0.5)');
 						_this.gradient.addColorStop(1,'rgba(0,44,68,0)');
						context.strokeStyle = _this.gradient;
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*(_this.outR+_this.innerR)/2,-Math.PI*1.2,-Math.PI*1.2+curAng*Math.PI/180,false);
 						context.textAlign = 'center',
						context.textBaseline = 'middle';
						context.font = 'normal '+ _this.maxWidth/2*0.6+ 'px Microsoft YaHei';
						context.fillStyle = 'rgba('+_this.baseColor+',1)';
						context.fillText(_this.value,sprite.left,sprite.top); //Math.round(_this.progress.curVal)
						context.stroke();
						context.restore();
					}
				},[_this.progress]);
				
				_this.outBg.left = _this.canvas.width()/2;
				_this.outBg.top = _this.canvas.height()/2;
				
				_this.showProgress.left = _this.canvas.width()/2;
				_this.showProgress.top = _this.canvas.height()/2;
				
				_this.outBg.paint(_this.context);
				
			};
			
			function animate(time){
				if(_this.value<=_this.progress.curVal){
					_this.progress.curVal = _this.value;
					_this.progress.lastAdvance = 0;
				  _this.progress.curVal=opts.minValue;
				  _this.showProgress.animating=false;
//					console.timeEnd();
				}else{
					_this.context.clearRect(0,0,_this.canvas.width(),_this.canvas.height());
					_this.outBg.paint(_this.context);
					_this.showProgress.update(_this.context,time);
					window.requestAnimationFrame(animate);
				}
			}
			
			var flag = false;
			_this.setValue=function(val){
//				console.time();
				_this.value = val;
				_this.progress.curVal=opts.minValue;
				
				window.requestAnimationFrame(animate); 
				return _this;
			} 
			
			_this.init();
			return _this;
		}
	});
})(jQuery);
