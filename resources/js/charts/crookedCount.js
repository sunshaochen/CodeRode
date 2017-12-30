+(function($) {
    'use strict';
    var CrookedCount = function(el, params) {
        this.element = el;
        this.canvas = null;
        this.context = null;
        this.params = params;
        this.value = 0;
        this.maxValue = 0;
        this.bgSprite = null;
        this.progressSprite = null;
        this.progress = null;
        this.progressColor = '#ff0';
        this.fullLength = 0;
        this.arcLength = 0;
        this.BGLINEWIDTH = 30;
        this.BGLINECOLOR = '#909A97';
        this.PROGRESSWIDTH = 40;
        this.TITLECOLOR = '#e8e9ea';
    }
    CrookedCount.VERSION = '3.0.1';

    CrookedCount.prototype.init = function() {
        var _this = this,
            _el = this.element,
            _opt = this.params;
        _opt.width ? _this.width(_opt.width) : '';
        _opt.height ? _this.height(_opt.height) : '';
        _opt.lineColor ? _this.progressColor = _opt.lineColor : '';

        var canvas = this.canvas = $('<canvas  width=' + _el.width() + ' height=' + _el.height() + '>Canvas not supported</canvas>');
        var context = this.context = canvas[0].getContext('2d');
        _el.empty();
        _el.append(canvas);
        this.bgSprite = new Sprite('bgSprite', {
            paint: function(sprite, context) {
                context.save();
                context.beginPath();
                context.lineWidth = _this.BGLINEWIDTH;
                context.strokeStyle = _this.BGLINECOLOR;
                context.arc(sprite.left + sprite.radius + _this.BGLINEWIDTH / 2 + (_this.PROGRESSWIDTH - _this.BGLINEWIDTH) / 2, sprite.top, sprite.radius, Math.PI, Math.PI * 3 / 2, false);
                context.lineTo(sprite.width, sprite.height - sprite.radius);
                context.stroke();
            }
        });

        var progress = {
            curValue: 0,
            lastAdvance: 0,
            execute: function(sprite, context, time) {
                if (this.lastAdvance == 0) {
                    this.lastAdvance = time;
                }
                if (this.curValue < _this.value) {
                    this.curValue += _this.value * (time - this.lastAdvance) / 1000;
                }
                if (this.curValue > _this.value - 1) {
                    this.curValue = _this.value;
                }
                sprite.paint(context);
                this.lastAdvance = time;
            }
        }
        this.progressSprit = new Sprite('progressSprit', {
            paint: function(sprite, context) {
                var precent = sprite.behaviors[0].curValue / _this.maxValue;
                var valueLength = _this.fullLength * precent;
                context.save();
                context.beginPath();
                context.lineWidth = _this.PROGRESSWIDTH;
                context.strokeStyle = _this.progressColor;
                if (valueLength <= _this.arcLength) {
                    context.arc(sprite.left + sprite.radius + _this.PROGRESSWIDTH / 2, sprite.top, sprite.radius, Math.PI, Math.PI + (valueLength / _this.arcLength) * Math.PI / 2, false);
                } else {
                    context.arc(sprite.left + sprite.radius + _this.PROGRESSWIDTH / 2, sprite.top, sprite.radius, Math.PI, Math.PI * 3 / 2, false);
                    context.lineTo(valueLength - _this.arcLength + sprite.left + sprite.radius + _this.PROGRESSWIDTH / 2, _this.PROGRESSWIDTH / 2);
                }

                context.stroke();
            }
        }, [progress]);

        this.bgSprite.left = this.progressSprit.left = 0;
        this.bgSprite.top = this.progressSprit.top = canvas.height();
        this.bgSprite.width = this.progressSprit.width = canvas.width();
        this.bgSprite.height = this.progressSprit.height = canvas.height();
        this.bgSprite.radius = this.progressSprit.radius = canvas.height() - this.BGLINEWIDTH / 2 - (this.PROGRESSWIDTH - this.BGLINEWIDTH) / 2;
        this.bgSprite.paint(context);
        //		this.progressSprit.paint(context);
        this.arcLength = this.bgSprite.radius * Math.PI / 2;
        this.fullLength = this.arcLength + this.bgSprite.width - this.bgSprite.radius - this.BGLINEWIDTH / 2;
    }

    CrookedCount.prototype.setValue = function(data) {
        var _this = this;
        this.value = parseInt(data.value);
        this.maxValue = parseInt(data.maxValue);

        function animate(time) {
            _this.context.clearRect(0, 0, _this.canvas.width(), _this.canvas.height());
            _this.bgSprite.paint(_this.context);
            _this.progressSprit.update(_this.context, time);
            window.requestAnimationFrame(animate);
        }

        window.requestAnimationFrame(animate);
    }


    function Plugin(option, methdOpt) {

        return this.each(function() {
            var _this = $(this);
            var data = _this.data('cw.crookedCount');
            var options = typeof option == 'object' && option;
            if (!data) {
                _this.data('cw.crookedCount', (data = new CrookedCount(_this, options)));
                data.init();
            }
            if (typeof option == 'string') {
                return data[option].call(data, methdOpt);
            }
        });
    }

    var old = $.fn.crookedCount;
    $.fn.crookedCount = Plugin;
    $.fn.crookedCount.Constructor = CrookedCount;

    //解决冲突
    $.fn.crookedCount.noConflect = function() {
        $.fn.crookedCount = old;
        return this;
    };
})(jQuery);