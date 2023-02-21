var trees = ["pine", "apple", "oak", "maple", "cherry"]
delete trees[3]
console.log(trees.length) // 5
console.log(
	trees, //undefined
	trees[3] // [ 'pine', 'apple', 'oak', <1 empty item>, 'cherry' ]
)

var x = Array(10, 20) // [10, 20]
x = Array([10, 20]) // [[10, 20]]
x = Array((10, 20)) // [<20 empty items>]
x = Array(20) // [20]
x = Array() //[]
// x = Array()[10][20] // ! -> Error
console.log(x)

/* prototypr property can't be deleted */
var Employee = { company: 'Acme' }
var employee1 = Object.create(Employee);
delete employee1.company
console.log(employee1.company, employee1);