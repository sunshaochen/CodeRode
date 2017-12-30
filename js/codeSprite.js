;(function(){
	var texts = ['A','B','C','D','E','F','G','H','I',
				'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
				'a','b','c','d','e','f','g','h','i',
				'f','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
				1,2,3,4,5,6,7,8,9,0,';','.',','];

	window.CodeSprite = function(pos,text){
		this.text = typeof text === 'string' ? text: texts[Math.ceil(Math.random()*(texts.length-1))] ;
		this.pos = pos;
		this.fill
	}

	
	CodeSprite.prototype.paint = function(context){
		context.save()
		context.font = '12px verdana';
		context.fillStyle = '#00BF00';
		context.fillText(this.text, this.pos.x, this.pos.y);
		context.restore();
	}

})();
