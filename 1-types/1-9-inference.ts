{

  // 타입 추론

  let text = 'hello';
  // 문자열로 할당하였기에 'text'에 타입은 자동으로 문자열이 된다. 

  text = 'bye';
  // text = 3;  => error

  function sendMessage(message = 'hello') { // 만약 기본값도 없을시에는 any가 암시적으로 타입이 된다
    console.log(message);
  }

  sendMessage('Hello')
  // sendMessage(1);  => error // 기본값이 문자열이므로, 타입을 문자열로 추론한다. 


  function add(x: number, y: number) {
    return x + y; // 반환값 타입을 지정하지 않았지만, number끼리 연산하므로 number로 추론된다
  }

  const result = add(1, 2); // result의 타입 역시 number로 추론된다

  // !! 추론은 사용하지 않고 정확히 명시하는 것이 좋다.

}