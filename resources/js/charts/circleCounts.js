(function($) {
	$.fn.extend({
		circleCounts:function(opts){
			var _this = this;
			_this.data = {};
			_this.img = new Image();
			_this.img.src ='img/sun.jpg';
			_this.mouseOver = false;
			_this.detailData = null;
			_this.mouseLoc = {};
			if(opts.width){
				_this.width(opts.width);
			}
			if(opts.height){
				_this.height(opts.height);
			}
			_this.maxWidth = _this.width()<_this.height()?_this.width():_this.height();
		
			_this.blocks = [];
			
			$(window).resize(function(){
				_this.maxWidth = _this.width()<_this.height()?_this.width():_this.height();
				_this.init();
			});
			
			_this.hover(function(){
				_this.mouseOver = true;
			},function(){
				_this.mouseOver = false;
			});
			
			//鼠标移入数据块事件
			_this.on('mousemove',function(e){
				var offsetX = e.offsetX;
				var offsetY = e.offsetY;
				_this.mouseLoc = {
					x :	offsetX,
					y : offsetY
				};
				_this.detailData = null;
				$.each(_this.blocks,function(index,value){
					var distance = Math.sqrt(Math.pow(offsetX-value.left,2)+Math.pow(offsetY-value.top,2));
					if(value.type == 'inner'){
						value.lineColor = 'rgb(34,71,99)';
					}else{
						value.lineColor = 'rgb(19,82,112)';
					}
					if(distance>=value.radius-value.lineWidth/2&&distance<=value.radius+value.lineWidth/2){
						var curAngel = Math.asin((offsetY-this.top)/Math.sqrt(Math.pow(offsetX-this.left,2)+Math.pow(offsetY-this.top,2)));
						if(offsetY>this.top){
							if(offsetX<=this.left){
								curAngel = 180-curAngel*180/Math.PI;
							}else{
								curAngel = curAngel*180/Math.PI;
							}
						}else{
							if(offsetX<=this.left){
								curAngel = 180-curAngel*180/Math.PI;
							}else{
								curAngel = 360+curAngel*180/Math.PI;
							}
						}
						var endAngle = this.endAngle*180/Math.PI>360?this.endAngle*180/Math.PI-360:this.endAngle*180/Math.PI;
						var startAngel = this.startAngle*180/Math.PI>360?this.startAngle*180/Math.PI-360:this.startAngle*180/Math.PI;
						

						if((curAngel>=startAngel&&curAngel<=endAngle)||
								(curAngel>startAngel&&curAngel<360&&endAngle<startAngel)||
								(curAngel>0&&endAngle<startAngel&&curAngel<=endAngle)){
							if(value.type == 'inner'){
								value.lineColor = 'rgba(225,225,0,0.4)';
							}else{
								value.lineColor = 'rgba(47,154,73,1)';
							}
							if(value.data.index){
								_this.detailData = value.data.index;
							}
						}
					}
					
					value.paint(_this.context);
				});
			});
			
				
			
			_this.progress = {
				curAngle :0,
		        lastAdvance: 0,
		        elapsedTime : 0 ,
				execute :function(sprite,context,time){
					if(this.curAngle<360){
//						if( this.lastAdvance){
//							this.elapsedTime = time - this.lastAdvance;
//						}else{
//							this.elapsedTime = 0;
//						}
//						this.deltaAngl = 1 *(this.elapsedTime /100);
//						console.log(this.deltaAngl);
						this.curAngle+=1;//Math.round(this.deltaAngl);
					}else{
						this.curAngle=0;
					}
					sprite.paint(_this.context);
//					this.lastAdvance = time;
				}
			};
			
			_this.blockProgress = {
					curAngle :0,
			        lastAdvance: 0,
			        elapsedTime : 0 ,
					execute :function(sprite,context,time){
						if(this.curAngle<360){
							this.curAngle+=1;//Math.round(this.deltaAngl);
						}else{
							this.curAngle=0;
						}
						sprite.paint(_this.context);
//						this.lastAdvance = time;
					}
				};
			
			
			_this.init = function(){
				_this.children().remove();
				_this.append('<canvas  width='+_this.width()+' height='+_this.height()+'>Canvas not supported</canvas>');
				_this.canvas =  _this.find('canvas'),
				_this.context = _this.find('canvas')[0].getContext('2d');
				
				_this.bgs = new Sprite('bgs',{
					paint:function(sprite,context){
						context.save();

						for(var i = 0;i<37;i++){

							//外圈虚线
							context.beginPath();
							context.strokeStyle = 'rgb(146,244,245)';
							context.lineWidth = 3;
							context.arc(sprite.left,sprite.top,_this.maxWidth*0.35,//半径
									i*Math.PI/18+_this.progress.curAngle*Math.PI/180,//起始角
									(i*Math.PI/18+Math.PI*2/55)+_this.progress.curAngle*Math.PI/180//终止角
									); //
							context.stroke();

							//内圈虚线
							context.beginPath();
							context.strokeStyle = 'rgb(51,101,152)';
							context.lineWidth = 2;
							context.arc(sprite.left,sprite.top,_this.maxWidth*0.31,//半径
									i*Math.PI/18+_this.progress.curAngle*Math.PI/180,//起始角
									(i*Math.PI/18+Math.PI*2/55)+_this.progress.curAngle*Math.PI/180//终止角
									); //
							context.stroke();
							
						}
						//内圈背景
						context.beginPath();
						context.fillStyle = 'rgb(0, 0, 0)';
						context.arc(sprite.left,sprite.top,_this.maxWidth*0.17,0,2*Math.PI);
						context.fill();

						//内圈实线
						context.beginPath();
						context.strokeStyle = 'rgb(13,176,227)';
						context.lineWidth = 5;
						context.arc(sprite.left,sprite.top,_this.maxWidth*0.17+5,0,2*Math.PI);
						context.stroke();
						
						context.fillStyle = 'rgb(153,255,255)';
						context.textAlign = 'center';
						context.textBaseline = 'middle';
						context.font = 'bold '+_this.maxWidth*0.06+'px Microsoft YaHei';
						context.fillText(_this.data.name?_this.data.name:'--',sprite.left,sprite.top);
						context.restore();
						
						BezierEllipse1(context,sprite.left,sprite.top-_this.maxWidth*0.12,_this.maxWidth*0.08,_this.maxWidth*0.01);
						
//						$(_this.img).width().height();
//						context.drawImage(_this.img,sprite.left-_this.maxWidth*0.06/2,sprite.top-_this.maxWidth*0.09,_this.maxWidth*0.06,_this.maxWidth*0.09);
					}
				},[_this.progress]);

				_this.blocks = [];
				_this.bloksSprite = null;
				_this.bloksSprite = new Sprite('bloksSprite',{
					paint:function(sprite,context){
						context.save();
						if(_this.blocks.length>0){
							$.each(_this.blocks,function(index,value){
								value.top = sprite.top;
								value.left = sprite.left;
								if(value.type=='out'){
									value.radius = _this.maxWidth*0.405;
									value.lineWidth = _this.maxWidth/2*0.2;
									value.startAngle = value.index*Math.PI*72/180+_this.blockProgress.curAngle*Math.PI/180;
									value.endAngle = (value.index*Math.PI*72/180+Math.PI*72/180*0.9+_this.blockProgress.curAngle*Math.PI/180);
								}else{
									value.radius = _this.maxWidth*0.247;
									value.lineWidth = _this.maxWidth/2*0.22;
									value.startAngle = value.index*Math.PI*120/180+(_this.blockProgress.curAngle)*Math.PI/180;
									value.endAngle = (value.index*Math.PI*120/180+Math.PI*120/180*0.9+(_this.blockProgress.curAngle)*Math.PI/180);
								}
								value.paint(context);
							});
						}else{
							//外部模块
							context.lineWidth = _this.maxWidth/2*0.2;
							for(var i = 0;i<5;i++){
								context.beginPath();
								var mylock = new block(i,'out',
										'rgb(19,82,112)',
										context.lineWidth,
										sprite.left,sprite.top,
										_this.maxWidth*0.405,
										i*Math.PI*72/180+_this.blockProgress.curAngle*Math.PI/180,
										(i*Math.PI*72/180+Math.PI*72/180*0.8+_this.blockProgress.curAngle*Math.PI/180),
										_this.data.outCircles[i]);
								mylock.paint(context);
								_this.blocks.push(mylock);
								context.stroke();
							}

							//内部模块
							context.save();
							

							context.lineWidth = _this.maxWidth/2*0.22;

							for(var i = 0;i<3;i++){
								var mylock = new block(i,'inner',
										'rgb(34,71,99)',
										context.lineWidth,
										sprite.left,sprite.top,
										_this.maxWidth*0.247,
										i*Math.PI*120/180+(_this.blockProgress.curAngle)*Math.PI/180,
										(i*Math.PI*120/180+Math.PI*120/180*0.8+(_this.blockProgress.curAngle)*Math.PI/180),
										_this.data.innerCircles[i]);
//								mylock.lineColor = 'rgba(225,225,0,0.3)';
								mylock.paint(context);
								
								_this.blocks.push(mylock);
							}
						}
						
						context.restore();
						context.restore();
					}
				},[_this.blockProgress]);
				
				//详情
				_this.detialSprite = new Sprite('detialSprite',{
					paint:function(sprite,context){

						var fontSize = _this.maxWidth*0.04,
							top = sprite.top,
							height = 0,
							maxWidth = 0;
						context.save();
						
						context.beginPath();
						context.fillStyle = 'rgb(255,255,255)';
						context.strokeStyle = 'rgb(51,101,152)';
//						context.textAlign = 'center';
						context.textBaseline = 'top';
						context.font = ''+fontSize+'px Microsoft YaHei';
						if(_this.detailData){
							$.each(_this.detailData,function(index,value){
								context.fillText(value,sprite.left+_this.maxWidth*0.03,top+_this.maxWidth*0.04);
								maxWidth<context.measureText(value).width?maxWidth=context.measureText(value).width:maxWidth;
								top += fontSize*1.3;
							});
							
							top +=_this.maxWidth*0.08;
							height = top-sprite.top;
							context.restore();
							context.beginPath();
							var lineBWidth = _this.maxWidth*0.02;
							var lineTWidth = _this.maxWidth*0.01;
							if(_this.detailData){
								maxWidth+= _this.maxWidth*0.06;
								context.save();
								context.strokeStyle = 'rgb(0,204,255)';
								context.lineJoin = 'miter';
								context.lineWidth = lineBWidth;
								context.moveTo(sprite.left,sprite.top);
								context.lineTo(sprite.left+maxWidth*0.2,sprite.top);
								context.stroke();
								context.lineWidth = lineTWidth;
								context.lineTo(sprite.left+maxWidth*0.8,sprite.top);
								context.stroke();
								context.beginPath();
								context.moveTo(sprite.left+maxWidth*0.8,sprite.top);
								context.lineWidth = lineBWidth;
								context.lineTo(sprite.left+maxWidth,sprite.top);
								context.lineWidth = lineBWidth;
								context.lineTo(sprite.left+maxWidth,sprite.top+height*0.2);
								context.stroke();
								context.lineWidth = lineTWidth;
								context.lineTo(sprite.left+maxWidth,sprite.top+height*0.8);
								context.stroke();
								context.beginPath();
								context.lineWidth = lineBWidth;
								context.moveTo(sprite.left+maxWidth,sprite.top+height*0.8);
								context.lineTo(sprite.left+maxWidth,sprite.top+height);
								context.lineTo(sprite.left+maxWidth*0.8,sprite.top+height);
								context.stroke();
								context.beginPath();
								context.lineWidth = lineTWidth;
								context.moveTo(sprite.left+maxWidth*0.8,sprite.top+height);
								context.lineTo(sprite.left+maxWidth*0.2,sprite.top+height);
								context.stroke();
								context.beginPath();
								context.lineWidth = lineBWidth;
								context.moveTo(sprite.left+maxWidth*0.2,sprite.top+height);
								context.lineTo(sprite.left,sprite.top+height);
								context.lineTo(sprite.left,sprite.top+height*0.8);
								context.stroke();
								context.lineWidth = lineTWidth;
								context.moveTo(sprite.left,sprite.top+height*0.8);
								context.lineTo(sprite.left,sprite.top+height*0.2);
								context.stroke();
								context.beginPath();
								context.lineWidth = lineBWidth;
								context.moveTo(sprite.left,sprite.top+height*0.2);
								context.lineTo(sprite.left,sprite.top);
								context.lineTo(sprite.left+maxWidth*0.2,sprite.top);
								context.stroke();
								context.beginPath();
								context.fillStyle = 'rgba(0,204,255,0.2)';
								context.moveTo(sprite.left,sprite.top);
								context.lineTo(sprite.left+maxWidth,sprite.top);
								context.lineTo(sprite.left+maxWidth,sprite.top+height);
								context.lineTo(sprite.left,sprite.top+height);
								context.lineTo(sprite.left,sprite.top);
								context.fill();
							}

							context.beginPath();
							top=sprite.top;
							context.fillStyle = 'rgb(255,255,255)';
							context.strokeStyle = 'rgb(51,101,152)';
//							context.textAlign = 'center';
							context.textBaseline = 'top';
							context.font = ''+fontSize+'px Microsoft YaHei';
							$.each(_this.detailData,function(index,value){
								context.fillText(value,sprite.left+_this.maxWidth*0.03,top+_this.maxWidth*0.04);
								maxWidth<context.measureText(value).width?maxWidth=context.measureText(value).width:maxWidth;
								top += fontSize*1.3;
							});
						}else{
							context.fillText('',sprite.left,sprite.top);
						}
						
						
						
						context.restore();
					}
				});
				
				_this.bgs.left = _this.canvas.width()/2; 
				_this.bgs.top =_this.canvas.height()/2;
				
				_this.bloksSprite.left = _this.canvas.width()/2; 
				_this.bloksSprite.top =_this.canvas.height()/2;
				
				//详情的位置
				_this.detialSprite.top = _this.height()*0.05;
				_this.detialSprite.left =_this.width()*0.04;
				
				
			};
			
			function animate(time) {
				_this.context.clearRect(0,0,_this.canvas.width(),_this.canvas.height());

			    _this.bgs.update(_this.context, time);
			    _this.bgs.paint(_this.context);

				
				if(_this.flag){
					if(!_this.mouseOver){
						_this.bloksSprite.update(_this.context, time);
					}
					_this.bloksSprite.paint(_this.context, time);
				}

			    _this.detialSprite.paint(_this.context);
			    
				window.requestNextAnimationFrame(animate);
			}
			window.requestNextAnimationFrame(animate);
			_this.flag = false;
			
			_this.setData = function(data){
				_this.data = data;
				_this.flag = true;
				return _this;
			};
			
			var block = function (index,type,lineColor,lineWidth,left,top,radius,startAngle,endAngle,data) {
				   this.index = index;
				   this.type = type;
				   this.left = left;
				   this.top = top;
				   this.radius = radius;
				   this.lineWidth = lineWidth;
				   this.lineColor = lineColor;
				   
				   this.startAngle = startAngle;
				   this.endAngle = endAngle;
				   this.textstartAngle = startAngle;
				   this.textendAngle = endAngle;
				   this.data = data;
				};

			block.prototype = {
			   paint: function (context) {
				   context.beginPath();
				   context.strokeStyle = this.lineColor;
				   context.lineWidth = this.lineWidth;
				   context.arc(this.left,this.top,this.radius,this.startAngle,this.endAngle,false);
				   context.stroke();
				   var str = this.data.value.name + this.data.value.value + this.data.value.unit;
				   if(this.type=='out'){
					   this.textstartAngle =this.startAngle+Math.PI*5/180;
					   this.textendAngle = this.endAngle-Math.PI*10/180;
				   }else{
					   this.textstartAngle =this.startAngle+Math.PI*20/180;
					   this.textendAngle = this.endAngle-Math.PI*25/180;
				   }
				   
				   drawCircularText(str, 
							-this.textstartAngle, 
							-this.textendAngle,
							this.radius*0.95,
							_this.maxWidth*0.04+'px Microsoft YaHei',this,context);
			   }
			};
			
			function BezierEllipse1(context, x, y, a, b) 
			{ 
				//关键是bezierCurveTo中两个控制点的设置 
				//0.5和0.6是两个关键系数（在本函数中为试验而得） 
				var ox = 0.5 * a, 
				oy = 0.6 * b; 
				context.save(); 
				context.translate(x, y); 
				context.beginPath(); 
				//从椭圆纵轴下端开始逆时针方向绘制 
				context.moveTo(0, b); 
				context.bezierCurveTo(ox, b, a, oy, a, 0); 
				context.bezierCurveTo(a, -oy, ox, -b, 0, -b); 
				context.bezierCurveTo(-ox, -b, -a, -oy, -a, 0); 
				context.bezierCurveTo(-a, oy, -ox, b, 0, b); 
				context.closePath(); 

//				context.strokeStyle = 'rgb(13,176,227)'; 
//				var gradient = context.createLinearGradient(0,0,_this.canvas.width(),0);
//				gradient.addColorStop(0,'rgb(36,68,81)');
//				gradient.addColorStop(1,'rgb(26,51,65)');
//				context.fillStyle = gradient;
				context.fillStyle = 'rgb(36,68,81)';
//				context.stroke(); 
				context.fill(); 
				context.restore(); 
			}; 
			
			function drawCircularText(string, startAngle, endAngle,radius,font,sprite,context) {
				   var angleDecrement = (startAngle - endAngle)/(string.length-1),
				       angle = parseFloat(startAngle),
				       index = 0,
				       character;

				   context.save();
				   context.font = font;

				   while (index < string.length) {
				      character = string.charAt(index);

				      context.save();
				      context.beginPath();
				      if(parseInt(character)>=0){
				    	  context.fillStyle = 'rgb(255,255,0)';
				    	  
				      }else{
						  context.fillStyle = 'rgb(255,255,255)';
				      }
				      context.translate(
					           sprite.left + Math.cos(angle) * radius,
					           sprite.top - Math.sin(angle) * radius);

				      context.rotate(Math.PI/2 - angle);
//				      
				      context.fillText(character, 0, 0);
//				      context.strokeText(character, 0, 0);

				      angle -= angleDecrement;
				      index++;

				      context.restore();
				   }
				   context.restore();
				}
			_this.init();
			return _this;
		}
	});
})(jQuery);