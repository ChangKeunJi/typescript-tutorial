{
  {

    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?: boolean; // ?을 붙이면, 있어도 없어도 된다. 
    }

    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
      private coffeeBeans: number = 0;
      private static BEANS_GRAM_PER_SHOT: number = 7;

      // 클래스를 상속하기 위해서는 private는 안되고 public 혹은 protect를 사용해야 한다. 
      constructor(coffeeBeans: number) {
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

    class CaffeLatteMachine extends CoffeeMachine {
      constructor(private customerName: string, coffeeBeans: number) {
        super(coffeeBeans);
      }

      private steamMilk(): void {
        console.log('Steaming Milk !!');
      }

      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        this.steamMilk();

        return {
          ...coffee,
          hasMilk: true
        }
      }
    }

    class SweetCoffeMaker extends CoffeeMachine {
      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);

        return {
          ...coffee,
          hasSugar: true,
        }
      }
    }

    const machines: CoffeeMaker[] = [
      // 타입을 정의하지 않아도 추론에 의해 CoffeeMachine을 타입으로 가진다. 
      new CoffeeMachine(16),
      new CaffeLatteMachine('Ji', 16),
      new SweetCoffeMaker(16),
      new CoffeeMachine(16),
      new CaffeLatteMachine('Ji', 16),
      new SweetCoffeMaker(16),
    ]

    machines.forEach(machine => {
      console.log(machine.makeCoffee(1));
      console.log('--------------------')
      // machine 배열의 타입을 CoffeMaker 일 때 사용할 수 있는 메서드가 제한된다. 
    })


    // 다형성 -> 서로 다른 클래스에서 동일한 메서드를 각기 다른 방식으로 간단하게 동작시킬 수 있다
    //         (makeCoffee의 작동 방식은 클래스마다 다르다)
  }
}