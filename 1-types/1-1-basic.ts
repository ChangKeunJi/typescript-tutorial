{
  // Primitive
  // number, string, boolean, bigint, symbol, null, undefined

  // Object
  // function, array ...

  // number
  const count: number = 33;

  // string
  const name: string = 'Ji';

  // boolean
  const boal: boolean = false;

  // undefined & null
  let str: undefined = undefined; // undefined만 할당할 수 있는 변수는 거의 쓰이지 않는다. 
  let age: number | undefined; // number 혹은 undefined 둘 중 하나가 와야한다. 
  function foo(): number | undefined { // number or undefined 반환
    return 3;
  }

  let person: null; // undefined와 마찬가지로 단독으로 쓰이는 경우는 거의 없다. 
  let person2: string | null; // string 또는 null 둘 중 하나가 와야한다.  

  // unknown : 무슨 타입일 지 모를때 (가능하면 쓰지 않는 것이 좋다)
  let notSure: unknown;
  notSure = 'he';
  notSure = 3;

  // any : 어떤 타입이든 할당 가능
  let anything: any;
  anything = 3;
  anything = 'hello';

  // void : 아무것도 반환하지 않을 때(변수에는 선언하지 않음)
  function print(): void {
    return;
  }

  print();

  // never : 반환 자체를 하지 않는다. 
  function throwError(): never {
    throw new Error();
    while (true) { };
  }

  // object
  let obj: object = [1, 2, 3];
  let obj2: object = function() { };
  let obj3: object = { name: 'Ji' }
  // => 다양한 형태로 할당 가능하기 때문에 쓰지 않는것이 좋다

}

