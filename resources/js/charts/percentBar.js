(function($) {
	$.fn.extend({
		percentBar:function(opts){
			var _this = this;
			_this.precent = 0;
			if(opts.width){
				_this.width(opts.width);
			}
			if(opts.height){
				_this.height(opts.height);
			}
			_this.maxWidth = _this.width()<_this.height()?_this.width():_this.height();
			//进度条更新
			_this.LineProgress = {
				curPrecent : 0,
				lastAdvance : 0, 
				execute :function(sprite,context,time){
					if(this.lastAdvance==0){
						this.lastAdvance=time;
					}
					if(this.curPrecent<_this.precent){
						this.curPrecent+=_this.precent*(time-this.lastAdvance)/1000;
					}
					if(this.curPrecent>_this.precent-1){
						this.curPrecent= _this.precent;
					}
					sprite.paint(context);
					this.lastAdvance = time;
				}
			},
			//内部点点点更新。。。。
			_this.innerDotsProgress = {
				curAngle : 0,
        lastAdvance: 0,
        velocityAng: 30,
				execute :function(sprite,context,time){
					this.curAngle+=this.velocityAng*(time - this.lastAdvance)/1000;
					sprite.paint(context);
					this.lastAdvance = time;
				}
			},
			
			$(window).resize(function(){
				_this.maxWidth = _this.width()<_this.height()?_this.width():_this.height();
				_this.init();
			});
			
			//进度条的颜色
			_this.lineColor = 'rgb(0,246,248)';
			if(opts.lineColor){
				_this.lineColor = opts.lineColor;
			}
			
			_this.init = function(){
				_this.children().remove();
				_this.append('<canvas  width='+_this.width()+' height='+_this.height()+'>Canvas not supported</canvas>');
				_this.canvas =  _this.find('canvas'),
				_this.context = _this.find('canvas')[0].getContext('2d'),
				
				//进度条
				_this.prcentLine = new Sprite('prcentLine',{
					
					paint:function(sprite,context){
						context.save();
						context.lineWidth = _this.maxWidth/2*0.12;
						context.strokeStyle = _this.lineColor;
						context.lineCap = 'round';
						context.beginPath();
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*0.9-5,0,Math.PI*_this.LineProgress.curPrecent/50,false);
						context.stroke();
						context.restore();
					}
				},[_this.LineProgress]),
				
				//背景
				_this.outBg = new Sprite('outBg',{
					paint:function(sprite,context){
						context.save();
						context.beginPath();
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*0.8-5,0,Math.PI*2,false); //内圈背景
						context.stroke();
						context.fillStyle = 'rgba(0, 0, 0, 1)';
						context.fill();
						context.beginPath();
						context.lineWidth = 3;
						context.strokeStyle =  _this.lineColor;
						context.fillStyle = 'rgba(10,63,95,0.7';
						context.arc(sprite.left,sprite.top,_this.maxWidth/2-5,0,Math.PI*2,false); //外圈
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*0.8-5,0,Math.PI*2,true); //内圈
						context.fill();
						context.stroke();
						context.restore();
					}
				}),
				
				//点点点。。
				_this.innerDots = new Sprite('innerDots',{
					paint:function(sprite,context){
						context.save();
						context.fillStyle = _this.lineColor;
						for(var i = 0;i<36;i++){
							context.beginPath();
							context.arc(sprite.left+(_this.maxWidth/2*0.8-_this.maxWidth*0.04-5)*Math.cos((_this.innerDotsProgress.curAngle+i*10)*Math.PI/180),sprite.top+(_this.maxWidth/2*0.8-_this.maxWidth*0.04-5)*Math.sin((_this.innerDotsProgress.curAngle+i*10)*Math.PI/180),_this.maxWidth/4*0.04,0,Math.PI*2,false); //
							context.fill();
						}
						context.restore();
					}
				},[_this.innerDotsProgress]),
				
				//百分比数值
				_this.innerText = new Sprite('innerText',{
					paint:function(sprite,context){
						context.save();
						context.fillStyle = _this.lineColor;
						context.font = _this.maxWidth*0.2+'px Microsoft YaHei';
						context.textAlign = 'center';
						context.textBaseline = 'middle';
						context.fillText(Math.round(_this.LineProgress.curPrecent)+'%',sprite.left,sprite.top);
						context.restore();
					}
				},[_this.LineProgress]);
				
				_this.outBg.left = _this.canvas.width()/2; 
				_this.outBg.top =_this.canvas.height()/2;
				
				_this.outBg.paint(_this.context);

				_this.prcentLine.left =_this.canvas.width()/2; 
				_this.prcentLine.top =_this.canvas.height()/2;
				
				_this.innerDots.left =_this.canvas.width()/2; 
				_this.innerDots.top =_this.canvas.height()/2;
				
				_this.innerText.left = _this.canvas.width()/2; 
				_this.innerText.top =_this.canvas.height()/2;
				
				
			};
			
			function animate(time) {
				_this.context.clearRect(0,0,_this.canvas.width(),_this.canvas.height());
				_this.outBg.paint(_this.context);
				_this.innerDots.update(_this.context, time);
				if(_this.flag){
					   _this.prcentLine.update(_this.context, time);
					   _this.innerText.update(_this.context, time);
				}
				window.requestNextAnimationFrame(animate);
			}
			_this.flag = false;
			_this.setValue = function(value){
				_this.precent = value;
				_this.LineProgress.curPrecent=0;
				_this.flag = true;
				window.requestNextAnimationFrame(animate);
				return _this;
			};
			_this.init();
			return _this;
		}
	});
})(jQuery);