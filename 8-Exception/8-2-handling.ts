{
  class NetworkClient {
    tryConnect(): void {
      throw new Error('No network');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) { }
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) { }
    run() {
      try {
        this.userService.login()
      } catch (e) {
        console.log(e)
        console.log('Catched !!!')
      }

    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();

  // 어느곳에 try catch 블럭을 놓아야 할까? 
  // -> 에러가 일어났을 때 의미있는 행동을 할 수 있는곳. 
  // -> App 단에서 작성해야 로그인이 실패했을 대 다른 행동을 지시할 수 있다. 

}