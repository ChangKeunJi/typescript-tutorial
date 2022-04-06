const x = {};
const y = {};
console.log(x);
// x는 Object를 상속받는다. 그 결과로 toString같은 함수를 사용할 수 있다.

console.log(x.__proto__ === y.__proto__); // true
console.clear();

function Machine(beans) {
	this.beans = beans;
}

Machine.prototype.makeCoffee = () => console.log("Making Coffee..");

const machine = new Machine(10);
console.log(machine); // {beans:10}
machine.makeCoffee();
console.log("prototype: ", Machine.prototype);
// {makeCoffee: .. , constructor: ..}
console.log(machine.__proto__);
// {makeCoffee: .. , constructor: ..}

function LatteMachine(milk) {
	this.milk = milk;
}

LatteMachine.prototype = Object.create(Machine.prototype);
// Machine의 프로토타입을 상속받는다.

const latteMachine = new LatteMachine(20);
latteMachine.makeCoffee(); // Making Coffee..
