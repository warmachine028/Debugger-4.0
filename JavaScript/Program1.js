/* isNaN()*/
console.log(2, isNaN(2))
console.log("2", isNaN("2"))
console.log("a", isNaN("a"))
console.log("2a", isNaN("2a"))
console.log("2/3", isNaN("2/3"))

/* What is the difference between a method and a function in javascript? */
var methodObject = {
	attribute: "xyz",
	display: function unnecessaryName() {
		/* Method*/
		console.log(this.attribute)
	},
}
methodObject.display(); /* Calling the method */

// Self Invoking - Annonymous Function
(function () {console.log("Hello, World!")})()
