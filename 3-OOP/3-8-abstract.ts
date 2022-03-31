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

    // abstract 키워드를 붙이면, 인스턴스를 생성할 수 없다. 
    // -> 인스턴스 생성 목적이 아닌 부모 키워드로서 역할만 한다. 
    abstract class CoffeeMachine implements CoffeeMaker {
      private coffeeBeans: number = 0;
      private static BEANS_GRAM_PER_SHOT: number = 7;

      constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
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

      // 자식 클래스마다 행동일 달라져야 한다면, abstract를 붙인다. 
      // 그러면 자식 클래스는 해당 메서드를 반드시 오버라이딩 해야한다.
      // 자식클래스에서 접근할 수 있어야 하기에 protected를 붙인다. 
      // 메서드 내부에 구현사항을 작성해서는 안된다. 
      protected abstract extract(shots: number): CoffeeCup

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

      protected extract(shots: number): CoffeeCup {
        return {
          shots,
          hasMilk: true
        }
      }
    }

    class SweetCoffeMaker extends CoffeeMachine {
      protected extract(shots: number): CoffeeCup {
        return {
          shots,
          hasSugar: true
        }
      }
    }

    const machines: CoffeeMaker[] = [
      // 타입을 정의하지 않아도 추론에 의해 CoffeeMachine을 타입으로 가진다. 
      new CaffeLatteMachine('Ji', 16),
      new SweetCoffeMaker(16),
      new CaffeLatteMachine('Ji', 16),
      new SweetCoffeMaker(16),
    ]

    console.log(machines);

    // machines.forEach(machine => {
    //   console.log(machine.makeCoffee(1));
    //   console.log('--------------------')
    //   // machine 배열의 타입을 CoffeMaker 일 때 사용할 수 있는 메서드가 제한된다. 
    // })
  }
}