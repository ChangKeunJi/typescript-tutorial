{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // interface와 약속한 메서드는 꼭 가지고 있어야 한다. 

    private coffeeBeans: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error('커핑콩은 0보다 커야합니다.')

      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number): void {
      console.log('Grinding !!');
      console.log('coffee beans: ', this.coffeeBeans)

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough beans!');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('Heating up !!')
    }

    private extract(shots: number): CoffeeCup {
      console.log('Extracting Coffee !!');
      return {
        shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup {

      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean() {
      console.log('clean !!')
    }
  }


  // 사용자가 커피를 추출하려고 할 때 어떤 메소드를 사용해야할 지 모른다.
  // 정말 필요한 메서드 이외에 private를 붙이면, 사용자는 어떤 메서드를 사용해야할 지 쉽게 알 수 있다. => 추상화
  // 또는 interface를 타입으로 지정하는 방법도 있다. 

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(300);
  // CoffeeMachine 인스턴스를 생성하므로, CoffeeMachine 자체가 타입이 된다.  
  maker.fillCoffeeBeans(4);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(5);
  // maker2.fillCoffeeBeans(3); -> 사용 불가능 
  maker2.makeCoffee(2);

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(6);
  maker3.fillCoffeeBeans(50);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) { };
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProUser {
    constructor(private machine: CommercialCoffeeMaker) { };
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.clean(); // 인터페이스 차이 때문에 아마추어와 달리 추가적 메소드를 사용 가능하다. 
      console.log(coffee);
    }
  }

  const amaUser = new AmateurUser(maker);
  const proUser = new ProUser(maker);

  amaUser.makeCoffee();
  proUser.makeCoffee();

}