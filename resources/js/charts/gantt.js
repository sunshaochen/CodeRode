(function($) {
	$.fn.extend({
		gantt:function(opts){
			var _this = this;
			_this.opts = opts;
			_this.container = null;
			_this.tableBg = null;
			_this.tableHead = null;
			_this.init = function(){
				_this.children().remove();
				_this.container = $('<div class="ganttContainer"></div>');
				_this.tableBg = $('<table class="ganttTable" border="1"><thead></thead><tbody><tr><td></td></tr></tbody></table>');
				_this.tableHead = $('<table class="ganttTableHead" border="1"><thead></thead></table>');
				_this.tableName = $('<table class="ganttTableName" border="1"><thead></thead><tbody></tbody></table>');
				_this.tableHeadTop = $('<table class="ganttTableHeadTop" border="1"><thead></thead></table>');
				_this.append(_this.container);
				_this.container.append(_this.tableBg).append(_this.tableHead).append(_this.tableName).append(_this.tableHeadTop);
			};
			_this.dragBg = {
				hourBg : function(){
					_this.minTime = new Date(_this.oData.data[0].values[0].from);
					var lastVal = _this.oData.data[0].values[_this.oData.data[0].values.length-1];
					_this.maxTime = new Date(lastVal.to);
					$.each(_this.oData.data,function(idx,val){
						$.each(val.values,function(i,v){
							if(new Date(v.from.match(/\d+-\d+-\d+/)[0])<_this.minTime){

								_this.minTime = new Date(v.from.match(/\d+-\d+-\d+/)[0]);
							}
							if(new Date(v.to.match(/\d+-\d+-\d+/)[0])>_this.maxTime){
								_this.maxTime = new Date(v.to.match(/\d+-\d+-\d+/)[0]);

							}
						});
					});
					// console.log(_this.minTime.format('yyyy-MM-dd')+'            maxTime     '+_this.maxTime.format('yyyy-MM-dd'));

					_this.tableBg.find('thead').append('<tr><th rowspan="2" class="ganttEventTitle" style=""><div>'+(_this.oData.eventTitle?_this.oData.eventTitle:'')+'<div></th></tr><tr></tr>');
					_this.tableName.find('thead').append('<tr><th rowspan="2" class="ganttEventTitle" style=""><div>'+(_this.oData.eventTitle?_this.oData.eventTitle:'')+'<div></th></tr><tr></tr>');
					_this.tableHeadTop.find('thead').append('<tr><th rowspan="2" class="ganttEventTitle" style=""><div>'+(_this.oData.eventTitle?_this.oData.eventTitle:'')+'<div></th></tr><tr></tr>');
					var days = _this.getDaysByDate(_this.minTime ,_this.maxTime );
					var nowTime = _this.minTime;
					for(var i = 0;i<days;i++){
						if(!_this.opts.hourStpe){
							_this.tableBg.find('thead tr:eq(0)').append('<th colspan="24" data-day='+nowTime.format('yyyy-MM-dd')+'><div>'+nowTime.format('yyyy-MM-dd')+'</div></th>');
							for(var hour = 0;hour<24;hour++){
								_this.tableBg.find('thead tr:eq(1)').append('<th><div  data-subTime="hour" class="ganttHour">'+hour+'</div></th>');
								_this.tableBg.find('tbody tr').append('<td></td>');
							}
						}else{
							_this.tableBg.find('thead tr:eq(0)').append('<th colspan="'+(24/_this.opts.hourStpe)+'"  data-day='+nowTime.format('yyyy-MM-dd')+'><div>'+nowTime.format('yyyy-MM-dd')+'</div></th>');
							var hour = 0;
							for(hour;hour<24;hour+=_this.opts.hourStpe){
								_this.tableBg.find('thead tr:eq(1)').append('<th  data-form='+hour+' data-to='+(hour+_this.opts.hourStpe)+' data-date='+nowTime.format('yyyy-MM-dd')+' ><div data-subTime="hour'+_this.opts.hourStpe+'" class="ganttHour">'+hour+':00-'+(hour+_this.opts.hourStpe)+':00'+'</div></th>');
								_this.tableBg.find('tbody tr').append('<td></td>');
							}
						}
						nowTime = new Date(nowTime.setDate(nowTime.getDate()+1));  
					}
					
					_this.tableHead.find('thead').html(_this.tableBg.find('thead').html());
					_this.container.on('scroll', function(e) { //表格上下拖动时，表头表的位置始终保持不变
	                    _this.tableHead.css('top', $(this).scrollTop());
	                    _this.tableName.css('left',$(this).scrollLeft());
	                    _this.tableHeadTop.css('top', $(this).scrollTop());
	                    _this.tableHeadTop.css('left',$(this).scrollLeft());
	                });
				},
			};

			_this.drawItems = {
				hourItems:function(){
					_this.container.append('<ul class="itemsContent"></ul>');
					$.each(_this.oData.data,function(idx,val){
						_this.find('.itemsContent').append('<li><div class="ganttItemName">'+val.name+'</div></li>');
						_this.tableName.find('tbody').append('<tr><td><div>'+val.name+'</div></td></tr>');
						$.each(val.values,function(i,v){
							var fromDate = v.from;
							var toDate = v.to;
							var label = v.label;
							var color = v.color;
							var fromDay = v.from.match(/....-..-../)[0];
							var toDay = v.to.match(/....-..-../)[0];

							var fromLeft = _this.find('th[data-day='+fromDay+']').position().left;

							var fromHour = parseInt(v.from.match(/\d+:/)[0].replace(':',''))+parseInt(v.from.match(/:.+$/)[0].replace(':',''))/60;
							var toHour = parseInt(v.to.match(/\d+:/)[0].replace(':',''))+parseInt(v.to.match(/:.+$/)[0].replace(':',''))/60;

							var days = _this.getDaysByDate(new Date(fromDay),new Date(toDay));
							var width = days * _this.find('th[data-day]').outerWidth();

							fromLeft+=fromHour/24*_this.find('th[data-date]').outerWidth()*2;

							width-=(fromHour/24*_this.find('th[data-date]').outerWidth()*2+(24-toHour)/24*_this.find('th[data-date]').outerWidth()*2);

							// console.log(width);
							// console.log('th-left:'+ fromLeft);
							// console.log(fromDay+'   '+toDay);
							// console.log(fromHour+'   '+toHour);
							var msg = val.name+'<br>开始时间：'+fromDate+'<br>结束时间：'+toDate+'<br>'+label;
							var li = _this.find('.itemsContent').find('li').last();
							li.append('<div class="ganttItemLine"></div>');
							li.find('.ganttItemLine').last().css({
								left:fromLeft+'px',
								background:color
							}).tooltip({
								title:msg
							});
							li.find('.ganttItemLine').last().animate({
								width:width+'px',
							});
						});

					});
					_this.tableBg.find('tbody').find('tr').height(_this.container.find('.itemsContent').height());
				},
			};
			_this.baseFontSize = $.getCureSize();
			_this.on('resize',function(){
				if(_this.baseFontSize!=$.getCureSize()){
					_this.init.call();
					if(_this.oData){
						_this.setData(_this.oData);
					}
					_this.baseFontSize = $.getCureSize();
				}
				
			});

			_this.setData = function(oData){
				_this.oData = oData;
				_this.dragBg[_this.opts.type+'Bg'].call();
				_this.drawItems[_this.opts.type+'Items'].call();
			};

			_this.getDaysByDate = function(date1,date2){
		        var startDate = Date.parse(date1.format('yyyy/MM/dd'));
		        var endDate = Date.parse(date2.format('yyyy/MM/dd'));
		        var diffDate = (endDate - startDate)+1*24*60*60*1000;
		        var days = diffDate/(1*24*60*60*1000);
		        return days;
		    };
			_this.init();
			return _this;
		}
	});
})(jQuery);