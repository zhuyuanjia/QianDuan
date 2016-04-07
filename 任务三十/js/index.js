function nameTitle(){
	var namePoint = document.getElementById('namePoint');
	namePoint.innerHTML = "必填，长度为9~24个字符";
}
function checkName(){
	var name = document.getElementById('name');
	var namePoint = document.getElementById('namePoint');
	namePoint.innerHTML = "";
	if(name.value == ""){
		namePoint.innerHTML = "姓名不能为空";
	}
	else{
		namePoint.innerHTML = "姓名可用";
	}
}
function passTitle(){
	var passPoint = document.getElementById('passPoint');
	passPoint.innerHTML = "必填，长度为9~24个字符";
}
function checkPass(){
	var pass = document.getElementById('pass');
	var PassPoint = document.getElementById('passPoint');
	passPoint.innerHTML = "";
	if(pass.value == ""){
		passPoint.innerHTML = "密码不能为空";
	}
	else{
		passPoint.innerHTML = "密码可用";
	}
}
function passtTitle(){
	var passtPoint = document.getElementById('passtPoint');
	passtPoint.innerHTML = "必填，长度为9~24个字符";
}
function checkPasst(){
	var passt = document.getElementById('passt');
	var PasstPoint = document.getElementById('passtPoint');
	passtPoint.innerHTML = "";
	if(passt.value == ""){
		passtPoint.innerHTML = "密码不能为空";
	}
	else{
		passtPoint.innerHTML = "密码可用";
	}
}
function emailTitle(){
	var emailPoint = document.getElementById('emailPoint');
	emailPoint.innerHTML = "必填，长度为9~24个字符，注意email格式";
}
function checkEmail(){
	var email = document.getElementById('email');
	var emailPoint = document.getElementById('emailPoint');
	emailPoint.innerHTML = "";
	if(email.value == ""){
		emailPoint.innerHTML = "Email不能为空";
	}
	else{
		emailPoint.innerHTML = "Email能用";
	}
}
function phoneTitle(){
	var phonePoint = document.getElementById('phonePoint');
	phonePoint.innerHTML = "必填，请输入正确的号码";
}
function checkPhone(){
	var phone = document.getElementById('phone');
	var phonePoint = document.getElementById('phonePoint');
	phonePoint.innerHTML = "";
	if(phone.value == ""){
		phonePoint.innerHTML = "电话不能为空";
	}
	else{
		phonePoint.innerHTML = "电话能用";
	}
}
var sub = document.getElementById('sub');
sub.onclick = function(){
	var name = document.getElementById('name');
	var namePoint = document.getElementById('namePoint');
	var pass = document.getElementById('pass');
	var PassPoint = document.getElementById('passPoint');
	var passt = document.getElementById('passt');
	var PasstPoint = document.getElementById('passtPoint');
	var email = document.getElementById('email');
	var emailPoint = document.getElementById('emailPoint');
	var phone = document.getElementById('phone');
	var phonePoint = document.getElementById('phonePoint');
	if(name.value.length>16){
		namePoint.innerHTML = "";
		namePoint.innerHTML = "姓名不能超过16个字节";
		name.style.borderColor = "#DC143C";
		namePoint.style.color = "#DC143C";
	}else{
		name.style.borderColor = "#00CD00";
		namePoint.style.color = "#00CD00";
	}
	if(pass.value<6){
		passPoint.innerHTML = "";
		passPoint.innerHTML = "密码长度最少为6位";
		pass.style.borderColor = "#DC143C";
		passPoint.style.color = "#DC143C";
	}else{
		pass.style.borderColor = "#00CD00";
		passPoint.style.color = "#00CD00";
	}
	if(pass.value!=passt.value){
		passt.style.borderColor = "#DC143C";
		passtPoint.style.color = "#DC143C";
		passtPoint.innerHTML = "两次密码不相同";
	}else{
		passt.style.borderColor = "#00CD00";
		passtPoint.style.color = "#00CD00";
	}
	if (/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(email.value)){
		email.style.borderColor = "#00CD00";
		emailPoint.style.color = "#00CD00";
	}else{
		email.style.borderColor = "#DC143C";
		emailPoint.style.color = "#DC143C";
		emailPoint.innerHTML = "邮箱格式不正确";
	}
	if(phone.value!== ""){
		
		var i,j; 
		strTemp="0123456789-()# ";      
		for (i=0;i<phone.value.length;i++){    
			j=strTemp.indexOf(phone.value.charAt(i));
			if (j==-1){    
			phone.style.borderColor = "red";
		    phonePoint.style.color = "red";
		    phonePoint.innerHTML = "电话只能为数字";  
		}else{
			phone.style.borderColor = "#00CD00";
            phonePoint.style.color = "#00CD00";   
		}  
    }    
}

}
