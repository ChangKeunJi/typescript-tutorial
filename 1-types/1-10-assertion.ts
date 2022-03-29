{

  // 타입을 알 수 없는 변수가 존재할 때 그 변수의 타입이 무엇인지 확신하고 있을 때 사용
  // => 사용하지 않는 것이 좋다

  function toString(): any {
    return 'Hello';
  }

  const res = toString(); // 타입은 any

  // 하지만 res의 타입이 'string'이라고 확신한다면 아래와 같이 사용가능하다.
  // 만약 실제로 string이 아니라면 undefined를 반환한다. 
  console.log((res as string).length); // 5
  console.log((<string>res).length); // 5

  // 아래의 경우에는 Error가 나면서 App이 종료된다
  const wrong: any = 5;
  console.log((wrong as number[]).push(1))

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // numbers가 배열이라고 확실할 때 '!' 사용
  const numbers = findNumbers()!;
  numbers!.push(2);

  const button = document.querySelector('button')!;
  // 정말 button 클래스가 있다고 확실할 때


}