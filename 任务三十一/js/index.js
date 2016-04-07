function getId(id){
	return document.getElementById(id)
}
var student = getId('student');
var young = getId('young');
var schoolList = getId('schoolList');
var youngList = getId('youngList');
var schoolCity = getId('schoolCity');
var schoolName = getId('schoolName');
var student = document.getElementById('student');
// var young = document.getElementById('young');
// var schoolList = document.getElementById('schoolList');
// var youngList = document.getElementById('youngList');
// var schoolCity = document.createElement("schoolCity");
// var schoolName = document.createElement("schoolName");
student.onclick = function(){
	if(student.checked){
		youngList.style.display = "none";
		schoolList.style.display = "block";
	}
}
young.onclick = function(){
	if(young.checked){
		schoolList.style.display = "none";
		youngList.style.display = "block";
	}
}
var list = [	
	{text:'北京',
			school:[
				'北京大学',
				'清华大学',
				'北京航空大学',
				'北京邮电大学'
			]},
	{text:'哈尔滨',
			school:[
				'黑龙江大学',
				'哈尔滨理工大学',
				'哈尔滨师范大学',
				'哈尔滨学院'
			]},
	{text:'成都',
			school:[
				'成都航空大学',
				'四川大学',
				'成都师范大学',
				'成都新东方'
			]},
	{text:'西安',
			school:[
				'西安交大',
				'嘻嘻嘻嘻',
				'实际上是啥时候',
				'是飒飒',
				'西南财经大学'
			]}
]
function listOne(){	
	var arr = [];
	for(var i = 0;i<list.length;i++){	
		var option = document.createElement("option");
		option.innerHTML = list[i].text;	
		option.value = list[i].text;	
		schoolCity.appendChild(option);		
	}

}
function listTwo(){		
	schoolName.innerHTML="";		
	for(var i = 1;i<=list.length;i++){		
		if(schoolCity.childNodes[i].selected){		
			for(var j=0;j<list[i-1].school.length;j++){		
				var option = document.createElement("option");		
				option.innerHTML = list[i-1].school[j];				
				option.value = list[i-1].school[j];
				schoolName.appendChild(option);
			}
		}
	}
}
listOne()
listTwo()
schoolCity.onclick = function(){	
	listTwo()
}