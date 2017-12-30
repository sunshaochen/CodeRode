;(function(){
	var Poem = {
		writing: false,
		key: '',
		status : [],
		myPoem : {
			title: 'Simple　Love',
			author: 'sunsc',
			line1: '也许，这就是我',
			line2: '一点都不好看',
			line3: '一点都不浪漫',
			line4: '一点都不会',
			line5: '表达出对你的爱',
			line6: '可是，真的好幸福',
			line7: '能够遇见你',
			line8: '能够爱上你',
			line9: '能够和你在一起',
			line10: '谢谢你对我的爱',
			line11: '我想，每天拥抱你',
			line12: '我想，每天亲吻你',
			line13: '我想，每天告诉你',
			line14: '我会比昨天',
			line15: '更爱你~',
		},
		init : function(){
			this.cacheDom();
			this.initStatus();
			// this.write();
		},
		cacheDom : function(){
			this.$consoleBg = document.getElementById('consoleBg');
			this.$title = document.getElementById('title');
			this.$author =  document.getElementById('author');
			this.$line1 = document.getElementById('line1');
			this.$line2 = document.getElementById('line2');
			this.$line3 = document.getElementById('line3');
			this.$line4 = document.getElementById('line4');
			this.$line5 = document.getElementById('line5');
			this.$line6 = document.getElementById('line6');
			this.$line7 = document.getElementById('line7');
			this.$line8 = document.getElementById('line8');
			this.$line9 = document.getElementById('line9');
			this.$line10 = document.getElementById('line10');
			this.$line11 = document.getElementById('line11');
			this.$line12 = document.getElementById('line12');
			this.$line13 = document.getElementById('line13');
			this.$line14 = document.getElementById('line14');
			this.$line15 = document.getElementById('line15');
		},
		initStatus: function(){
			for( key in this.myPoem ){
				this.status.push(key);
			}
			this.titleKey();
		},
		write : function(el, text, func, time){
			var index = 0;
			el.innerText = '';
			var _this = this;
			var interval = setInterval(function(){
				console.log(el)
				console.log(text)
				var addVal = text.substring(index, index+1);
				el.innerText += addVal;
				index++;
				if(index==text.length){
					clearInterval(interval);
					if(func){
						func.call(_this);
					}
				}
			},time? time: 150);
		},
		titleKey : function(){
			this.write(this.$consoleBg,'echo>>title',this.titleWriter.bind(this));sf
		},
		titleWriter : function(){
			this.write(this.$title,this.myPoem['title'],this.authorKey.bind(this));
		},
		authorKey : function(){
			this.write(this.$consoleBg,'echo>>author',this.authorWriter.bind(this));
		},
		authorWriter : function(){
			this.write(this.$author,this.myPoem['author'],this.indexKey.bind(this));
		},
		indexKey : function(){
			this.write(this.$consoleBg,'echo>>text',this.line1Writer.bind(this));
		},
		line1Writer : function(){
			this.write(this.$line1,this.myPoem['line1'],this.line2Writer.bind(this), 250);
		},
		line2Writer : function(){
			this.write(this.$line2,this.myPoem['line2'],this.line3Writer.bind(this), 250);
		},
		line3Writer : function(){
			this.write(this.$line3,this.myPoem['line3'],this.line4Writer.bind(this), 250);
		},
		line4Writer : function(){
			this.write(this.$line4,this.myPoem['line4'],this.line5Writer.bind(this), 250);
		},
		line5Writer : function(){
			this.write(this.$line5,this.myPoem['line5'],this.line6Writer.bind(this), 250);
		},
		line6Writer : function(){
			this.write(this.$line6,this.myPoem['line6'],this.line7Writer.bind(this), 250);
		},
		line7Writer : function(){
			this.write(this.$line7,this.myPoem['line7'],this.line8Writer.bind(this), 250);
		},
		line8Writer : function(){
			this.write(this.$line8,this.myPoem['line8'],this.line9Writer.bind(this), 250);
		},
		line9Writer : function(){
			this.write(this.$line9,this.myPoem['line9'],this.line10Writer.bind(this), 250);
		},
		line10Writer : function(){
			this.write(this.$line10,this.myPoem['line10'],this.line11Writer.bind(this), 250);
		},
		line11Writer : function(){
			this.write(this.$line11,this.myPoem['line11'],this.line12Writer.bind(this), 250);
		},
		line12Writer : function(){
			this.write(this.$line12,this.myPoem['line12'],this.line13Writer.bind(this), 250);
		},
		line13Writer : function(){
			this.write(this.$line13,this.myPoem['line13'],this.line14Writer.bind(this), 250);
		},
		line14Writer : function(){
			this.write(this.$line14,this.myPoem['line14'],this.line15Writer.bind(this), 250);
		},
		line15Writer : function(){
			this.write(this.$line15,this.myPoem['line15'],this.finalWriter.bind(this));
		},
		finalWriter : function(){
			this.write(this.$consoleBg,'echo>>To　my　love　Young　~');
		}

	};
	Poem.init();
})();