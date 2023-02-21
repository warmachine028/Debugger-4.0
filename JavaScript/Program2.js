var x
console.log(x) // Logs undefined

console.log(y) // Throws Not defined error

foo() //! -> Error
var foo = function () {
	/* Some Code */
}

bar()
function bar() {
	/*some code */
}

function foo1() {
	//? -> Returns Object
	return {
		bar: "hello",
	}
}
function foo2() {
	//! //? -> Returns undefined
	return
	{
		bar: "hello"
	}
}
