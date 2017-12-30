(function($) {
	$.fn.extend({
		mutiPercentBar:function(opts){
			var _this = this;
			_this.precent = 0,
			_this.outPercent = [];
			_this.colors = [];
			_this.outFlag = false;
			_this.innerFlag = false;
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
				lastAdvance: 0,
				execute :function(sprite,context,time){
					if(this.lastAdvance==0){
						this.lastAdvance=time;
					}
					if(this.curPrecent<_this.precent){
						this.curPrecent+=_this.precent*(time-this.lastAdvance)/1000;
					}
					if(this.curPrecent>_this.precent-1){
						this.curPrecent = _this.precent;
						_this.innerFlag = true;
					}
					sprite.paint(context);
					this.lastAdvance=time;
				}
			};
			
			//外圈进度条更新
			_this.outLineProgress = {
				curBlok : 0,
				curColor : '',
		    lastAdvance: 0,
		    PAGEFLIP_INTERVAL: 1,
				execute :function(sprite,context,time){
					if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
						if(this.curBlok<36){
							this.curBlok+=1;
						}else{
							_this.outFlag = true;
						}
						sprite.paint(context);
						this.lastAdvance = time;
					}
				}
			};
			
			_this.init = function(){
				_this.children().remove();
				_this.append('<canvas  width='+_this.width()+' height='+_this.height()+'>Canvas not supported</canvas>');
				_this.canvas =  _this.find('canvas'),
				_this.context = _this.find('canvas')[0].getContext('2d'),
				//进度条
				_this.prcentLine = new Sprite('prcentLine',{
					
					paint:function(sprite,context){
						context.save();
						context.strokeStyle = 'rgb(0,145,232)';
						context.lineWidth = _this.maxWidth/2*0.04;
						context.lineCap = 'round';
						context.beginPath();
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*0.63,0,Math.PI*_this.LineProgress.curPrecent/50,false);
						context.stroke();
						context.restore();
					}
				},[_this.LineProgress]),
				//外圈背景
				_this.outBg = new Sprite('outBg',{
					paint:function(sprite,context){
						context.save();
						context.strokeStyle = 'rgb(3,40,61)';
						context.lineWidth = _this.maxWidth/2*0.2;
						for(var i = 0;i<37;i++){
							context.beginPath();
							//宽度半径的20%
							context.arc(sprite.left,sprite.top,_this.maxWidth*0.4,i*Math.PI/18,(i*Math.PI/18+Math.PI*2/45),false); //
							context.stroke();
						}
						context.beginPath();
						context.strokeStyle = 'rgb(255,255,0)';
						context.lineWidth = _this.maxWidth/2*0.01;
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*0.63,0,Math.PI*2,false); //
						context.stroke();
						context.restore();
					}
				});
				
				//外圈进度条
				_this.outProgress = new Sprite('outProgress',{
					paint:function(sprite,context){
						context.save();
						context.lineWidth = _this.maxWidth/2*0.2;
						for(var i = 0;i<_this.outLineProgress.curBlok;i++){
							context.beginPath();

							context.strokeStyle = _this.colors[i];
							//宽度半径的20%
							context.arc(sprite.left,sprite.top,_this.maxWidth*0.4,i*Math.PI/18,(i*Math.PI/18+Math.PI*2/45),false); //
							context.stroke();
						}
						context.beginPath();
						context.strokeStyle = 'rgb(0,145,232)';
						context.lineWidth = _this.maxWidth/2*0.01;
						context.arc(sprite.left,sprite.top,_this.maxWidth/2*0.63,0,Math.PI*2,false); //
						context.stroke();
						context.restore();
					}
				},[_this.outLineProgress]);
				
				//百分比数值
				_this.innerText = new Sprite('innerText',{
					paint:function(sprite,context){
						context.save();
						context.fillStyle = 'rgb(0,145,232)';
						context.font = _this.maxWidth*0.15+'px Microsoft YaHei';
						context.textAlign = 'center';
						context.textBaseline = 'top';
						context.fillText(Math.round(_this.LineProgress.curPrecent)+'%',sprite.left,sprite.top);
						context.fillStyle = 'rgb(0,0,0)';
						context.font = 'bold '+_this.maxWidth*0.15+'px Microsoft YaHei';
						context.textBaseline = 'bottom';
						context.fillText(opts.name,sprite.left,sprite.top);
						context.restore();
						
					}
				},[_this.LineProgress]);
				
				_this.outBg.left = _this.canvas.width()/2; 
				_this.outBg.top =_this.canvas.height()/2;
				
				_this.outBg.paint(_this.context);

				_this.prcentLine.left =_this.canvas.width()/2; 
				_this.prcentLine.top =_this.canvas.height()/2;

				_this.innerText.left = _this.canvas.width()/2; 
				_this.innerText.top =_this.canvas.height()/2;
				
				_this.outProgress.left = _this.canvas.width()/2; 
				_this.outProgress.top =_this.canvas.height()/2;
			};
			
			function animate(time) {
				_this.context.clearRect(0,0,_this.canvas.width(),_this.canvas.height());
				_this.outBg.paint(_this.context);
				if(_this.flag){

				   _this.prcentLine.update(_this.context, time);
				   _this.innerText.update(_this.context, time);
				   _this.outProgress.update(_this.context, time);
				}
				if(!_this.outFlag || !_this.innerFlag ){
					window.requestNextAnimationFrame(animate);
				}
				
			}
			
			_this.flag = false;
			_this.setData = function(data){
				_this.outFlag = false;
				_this.innerFlag = false;
				_this.precent = data.innerPercent.value;
				_this.LineProgress.curPrecent=0;
				_this.LineProgress.lastAdvance=0;
				
				_this.outPercent = data.outerPercent;
				_this.curBlok = 0;
				_this.total = 0;
				$.each(_this.outPercent,function(index,value){
					_this.total+= parseInt(value.value);
				});
				_this.colors = [];
				$.each(_this.outPercent,function(index,value){
					for(var i = 0; i<Math.round(value.value/_this.total*36);i++){
						_this.colors.push(value.color);
					}
				});
				_this.flag = true;
				window.requestNextAnimationFrame(animate);
				return _this;
			};
			_this.init();
			
			return _this;
		}
	});
})(jQuery);