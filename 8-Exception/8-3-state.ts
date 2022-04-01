{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  }
  type SuccessState = { result: 'success' };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return { result: 'success' }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) { }
    login(): ResultState {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) { }
    run() {
      try {
        this.userService.login()
      } catch (e) { // -> error는 캐치 블록으로 넘어오면서 타입 정의를 잊어버린다. 
        console.log(e)
        console.log('Catched !!!')
      }

    }
  }

  class App2 {
    constructor(private userService: UserService) { }
    run() {

      const result = this.userService.login();

      if (result.result === 'fail') {
        if (result.reason === 'offline') { }
        if (result.reason === 'down') { }
      }
      if (result.result === 'success') { }
      // -> 예상할 수 있는 에러들에 대해서는 State를 만들어 대응한다. 

    }
  }


  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();

}