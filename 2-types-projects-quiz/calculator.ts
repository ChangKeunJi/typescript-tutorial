/**
 * Let's make a calculator 🧮
 */

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(type: Command, x: number, y: number): number {

  if (type === 'add') return x + y;

  if (type === 'substract') return x - y;

  if (type === 'multiply') return x * y;

  if (type === 'divide') return x / y;

  if (type === 'remainder') return x % y;

  return -1;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

