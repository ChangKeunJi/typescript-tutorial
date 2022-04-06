function simpleFunc() {
	console.log(this);
}

window.simpleFunc(); // window -> 호출한 주체인 전역 객체를 가르킨다.

class Counter {
	count = 0;
	increase = function () {
		console.log(this);
	};

	printThis = () => {
		console.log(this);
	};
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
const caller2 = counter.increase.bind(counter);
const caller3 = counter.printThis;
caller();
// undefined -> const에 할당시 전역객체 프로퍼티에 할당되지 않으므로, this값은 undefined.
caller2();
// Counter { count: 0, increase: increase() } -> bind를 통해 this값을 연결해줌
caller3();
// Counter { count: 0, increase: increase() } -> 화살표 함수는 작성된 위치에 따라서 this값이 결정됨

class Bob {
	printThis = () => this;
}
const bob = new Bob();
bob.run = counter.increase;
bob.foo = "hello";
bob.run();
// Object { printThis: printThis(), run: increase(), foo: "hello" } -> 호출한 주체 bob을 가르킨다.
console.log(bob.printThis() instanceof Bob); // true
// Object { printThis: printThis(), run: increase(), foo: "hello" } -> Bob이 아닌 bob을 가르킨다. ??
console.log(bob.printThis()); // instance
