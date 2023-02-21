function getAge() {
   'use strict';
	age = 21;
    console.log(age);
}

// getAge();

var a = [10, 20, 30];
var b = a;
b = [20];

console.log(a);
console.log(b);

function test(){
	console.log(arguments);
}
test(10, 20, "z");

console.log('1' - - '1');
console.log('1' + - '1');
console.log(this, typeof this);

var s = "[ayushv.medium.com/](https://ayushv.medium.com/)" 
var y = new String("hrllo")
console.log(typeof s, s instanceof String);
console.log(typeof y, y instanceof String);
