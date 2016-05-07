function Person(name,age){
	this.name = name;
	this.age = age;
	this.sex = "男";
}
function Student(name,age,grade){
	Person.apply(this,arguments);
	//Person.call(this,name,age);
	this.grade = grade;
}
var student = new Student("张三",30,"高一");
alert("姓名:"+student.name+"    年龄:"+student.age+"     班级:"+student.grade+"     性别:"+student.sex);
console.log("姓名:"+student.name+"    年龄:"+student.age+"     班级:"+student.grade);