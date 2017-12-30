
$('#tree').tree({
	displayKey : ['apply_dept_name','apply_user_name','state_name'],
})



var progressBarOpt = {
	title:'计划',
//	baseColor:'255,191,0',
	minValue:130,
	maxValue:450,
};

var progressBar = $('#progressBar').progressBar(progressBarOpt); 


var percentBar = $('#percentBar').percentBar({
//	width:'30%',
//	height:'30%',
	lineColor:'rgb(0,205,254)',
});

var multiPercentData = {
	innerPercent:{value:60,name:'平均负载率'},
	outerPercent:[ //
	    {value:55,name:'过载',color:'rgb(0,246,248)'},
	    {value:65,name:'重载',color:'rgb(0,114,122)'},
	    {value:35,name:'低电压',color:'rgb(0,51,153)'},
	    {value:21,name:'三相不平衡',color:'rgb(147,206,231)'},
	]
};

var mutiPercentBarOpt = {
	name:'主变'
}

var mutiPercentBar = $('#mutiPercentBar').mutiPercentBar(mutiPercentBarOpt);




var circleCountsData ={
	name:'特级保电',
	outCircles:[
	    {value:{name:'保电人员',value:'100',unit:'名'},index:['输电：20人', '变电：20人','配电：30人','外协：30人',]},
	    {value:{name:'保电车辆',value:'50',unit:'辆'},index:['输电：10辆', '变电：10辆','配电：10辆','外协：20辆',]},
	    {value:{name:'保电仓库',value:'5',unit:'个'},index:['输电：1个', '变电：1个','配电：1个','外协：2个',]},
	    {value:{name:'保电班组',value:'10',unit:'组'},index:['输电：2组', '变电：2组','配电：2组','外协：4组',]},
	    {value:{name:'特级保电用户',value:'5',unit:'户'}}
	],
	innerCircles:[
	    {value:{name:'变电站：',value:'10',unit:'座'},index:['输电：1座', '变电：8座','配电：30人','外协：30人',]},
	    {value:{name:'开关站：',value:'10',unit:'座'},index:['输电：10辆', '变电：10辆','配电：10辆','外协：20辆',]},
	    {value:{name:'线路：',value:'10',unit:'条'},index:['输电：1个', '变电：1个','配电：1个','外协：2个',]}           
	]
};

$('#circleCounts').circleCounts({

}).setData(circleCountsData);


$('#crookedCount').crookedCount({
//	title:'重大检修',
	lineColor:'#9CE4FD'
});

$('#crookedCountInner').crookedCount({
//	title:'重大检修',
//	lineColor:'#9CE4FD'
});

setTimeout(function(){
	progressBar.setValue(330);
	percentBar.setValue(60);
	mutiPercentBar.setData(multiPercentData);
	$('#crookedCount').crookedCount('setValue',{
			value:29,
			maxValue:50
		}).attr('title','当前：29，最高：50').tooltip();
	$('#crookedCountInner').crookedCount('setValue',{
			value:35,
			maxValue:50
		}).attr('title','当前：35，最高：50').tooltip();
},1000);


$(window).on('resize',function(){
	$('#progressBar').empty().progressBar(progressBarOpt).setValue(330); 
	 $('#mutiPercentBar').empty().mutiPercentBar(mutiPercentBarOpt).setData(multiPercentData);
});
