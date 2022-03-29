{
  type FailState = { result: 'fail', reason: string }
  type SuccessState = { result: 'success', response: { body: string } }

  type LoginState = SuccessState | FailState; // union

  function login(): LoginState {
    return { reason: 'fail', result: 'fail' }
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

    // 2. discriminated를 사용한다 
    // 두 상태의 공통 속성을 사용한다
    if (state.result === 'success') {
      console.log(state.response);
    } else {
      console.log(state.reason)
    }
  }
}