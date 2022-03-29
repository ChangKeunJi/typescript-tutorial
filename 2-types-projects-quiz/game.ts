/**
 * Let's make a game 🕹
 */

type Position = { x: number, y: number }
const position: Position = { x: 0, y: 0 };

type Direction = 'up' | 'down' | 'right' | 'left';
const move = (direction: Direction): Position => {

  if (direction === 'up') position.y++;
  if (direction === 'down') position.y--;
  if (direction === 'left') position.x--;
  if (direction === 'right') position.x++;
  return position
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
