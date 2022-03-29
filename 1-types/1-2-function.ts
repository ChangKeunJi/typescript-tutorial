{

  // 인수와 반환되는 값이 모두 number 이여야 한다  
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Promise를 반환하고 number를 resolve 한다
  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  // Optional Parameter
  // : ?을 붙이면 매개변수가 전달되지 않을 때 undefined가 할당된다.
  function printName(first: string, last?: string) {
    console.log(first);
    console.log(last);
  }

  printName('CK', 'Ji');
  printName('Steve') // Steve, undefined

  // Default Parameter
  // : 매개변수를 전달하지 않으면 지정된 기본값이 전달된다.
  function printMessage(msg: string = 'Hello') {
    console.log(msg);
  }

  printMessage(); // 'Hello'

  // Rest Parameter
  // : 인수들의 목록을 배열로 받는다.
  function addNumber(...numbers: number[]): number {
    // 전달된 인수들을 하나의 배열로 만든다.
    return numbers.reduce((a, b) => a + b);
  }

  addNumber(1, 2, 3, 4, 5) // 15
}