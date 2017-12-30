/**
 *  tree
 * author： sunsc
 * date : 2017/12/21
 **/
;
(function($) {
    var _opts = {
        width: '100%',
        height: '100%',
        displayKey : [],
        data: {}
    }

    function Tree(el, opts) {
        for (var idx in _opts) {
            _opts[idx] = opts[idx] || _opts[idx]
        };
        this.$el = el;
    }

    Tree.prototype.init = function() {
        _clearTree.call(this);   // 初始化画布
        _chacheDom.call(this);  // 缓存dom元素
        _addCanvas.call(this);  // 添加canvas到元素中
        _createTags.call(this);
    };

    function _clearTree() {
        this.$el.empty();
    }

    function _chacheDom() {
        this.$canvas = $('<canvas width="'+ this.$el.width() +'" height="' + this.$el.height() + '"></canvas>');
    };

    function _addCanvas(el) {
    	this.$el.empty().append(this.$canvas);
    }

    function _createTags() {
    	var topTag = new TopTag(this, {});
    	topTag.paint();
    };


    // 标签父类
    function Tags(treeData, nodeData) {
        this.treeData =treeData; //tree控件对象
        this.$el = this.treeData.$el;
        this.$canvas = this.treeData.$canvas; // canvas对象
        this.context =  this.$canvas[0].getContext('2d');
        this.opts = treeData.opts;
        this.pos = {x:0, y:0}; // 标签位置
        this.data = nodeData; // 标签数据
        // this.level = level; // 标签等级
    }

    var _OVERRID_EERROR_INFO = 'please override this function';

    Tags.initTag = function(){
        var opts = this.opts;
        switch (typeof opts.displayKey) {
            case label_1:
                // statements_1
                break;
            default:
                // statements_def
                break;
        }
        // tihs.displayVal = 
    }

    // 向画布中添加该标签
    Tags.prototype.paint = function() {
        return new Error(_OVERRID_EERROR_INFO);
    };

    // 设置标签的坐标
    Tags.prototype.setPostion = function(pos){
        this.pos = ops;
    }

    // 一级标签
    function TopTag(canvas, data, color, level, pos) {
        Tags.call(this, canvas, data, color, level, pos);
    }

    TopTag.prototype.initPos = function(){
        this.pos.x = this.$canvas.width()/2;
        this.pos.y = 30;
    }

    TopTag.prototype.paint = function() {

    }

    function Plugin(option, methdOpt) {
        return this.each(function() {
            var _this = $(this);
            var data = _this.data('cw.tree');
            var options = typeof option == 'object' && option;
            if (typeof option == 'object') {
                _this.data('cw.tree', (data = new Tree(_this, options)));
                data.init();
            }
            if (typeof option == 'string') {
                return data[option].call(data, methdOpt);
            }
        });
    }
    var old = $.fn.tree;
    $.fn.tree = Plugin;
    $.fn.tree.Constructor = Tree;

    //解决冲突
    $.fn.tree.noConflect = function() {
        $.fn.tree = old;
        return this;
    };

})(jQuery);