//prototype 
var Person = function(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.sayName = function() {
    console.log(this.name);
};

Person.prototype.sayAge = function() {
    console.log(this.age);
};

var person = new Person('John', 20);
person.sayName();
person.sayAge();

//example 2
let obj= {
    "x" : 10,
    printX : function(){
        console.log(this.x);
    }


}


obj.printX();
console.log(obj);
console.log(obj.toString()); //Message [Object Object]

//example 3

let Date=new Date();


let proto1=Object.getPrototypeOf(Date);
console.log(proto1);


let proto2=Object.getPrototypeOf(proto1);
console.log(proto2);


let proto3=Object.getPrototypeOf(proto2);
console.log(proto3);



//protype chaning 
var Student = function(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayGrade = function() {
    console.log(this.grade);
}

var student = new Student('John', 20, 'A');
student.sayName();
student.sayAge();
student.sayGrade();

// prototype chaning Example 2 

let myObj={
    greet : function(){
        console.log("Good Eveneing");
    }
}
console.log(myObj);
console.log(myObj.hasOwnProperty('greet'));
console.log(myObj.hasOwnProperty('toString'));


console.log("Date");
let date=new Date();
console.log(date.hasOwnProperty('getMonth'));//false
console.log(date.getMonth());//1-->Month Feb
date.getMonth =function(){
    return "Tiger Zindha hai";
}
console.log(date.getMonth());//Tiger Zindha hai







