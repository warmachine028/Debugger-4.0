String.prototype.giveAyushPizza = () => {
  return 'Just give Ayush pizza already!';
};

const name = 'Ayush';

console.log(name.giveAyushPizza());


/* IIFE: Immediate Invoke Function Expression */
function sayHi() {
	return (() => 0)();
}

console.log(typeof sayHi());
console.log(typeof typeof 1);
console.log(...'Ayush');
console.log([...'Ayush']);
console.log("Ayush"[4]);

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a, a[b]);
