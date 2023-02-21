let person = { name: 'Ayush' };
const members = [person];
person = null;

console.log(members);

const person2 = {
	name: 'Ayush',
	age: 21,
};

for (const item in person2) {
	console.log(item);
}


console.log([] + []);               // (1)
console.log([1] + []);              // (2)
console.log([1] + "abc");           // (3)
console.log([1, 2, 3] + [1, 3, 4]); // (4)


