{
  // Union : OR

  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) { // 타입을 미리 정의한 Direction으로 지정한다. 
    console.log(direction);
  }

  move('up'); // Direction 타입은 미리 지정된 4가지만 유효하다. 

  // 실제 사용 사례

  type FailState = { reason: string }
  type SuccessState = { response: { body: string } }

  type LoginState = SuccessState | FailState; // union

  function login(): LoginState {
    return { reason: 'fail' }
  }

  login()

  function printLoginState(state: LoginState) {

    // 어떤 state가 올 지 모르기 때문에 state.response나 state.reason을 사용할 수 없다. 

    // 1. in 연산자를 사용한다 
    if ('response' in state) { // 성공한 경우
      console.log(state.response);
    } else {
      console.log(state.reason)
    }
  }
}