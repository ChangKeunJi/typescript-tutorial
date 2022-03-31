{
  {

    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
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

      // 자식 클래스에서 constructor가 필요하다면, 부모 클래스의 constructor도 호출해야 한다. 
      constructor(private customerName: string, coffeeBeans: number) {
        super(coffeeBeans); // super가 부모 constructor를 호출시키고 인수를 전달한다. 
      }

      private steamMilk(): void {
        console.log('Steaming Milk !!');
      }

      // 부모 메서드를 overwritte할 수 있다. 
      makeCoffee(shots: number): CoffeeCup {

        // super 키워드를 통해 부모 클래스의 메서드 호출 가능
        const coffee = super.makeCoffee(shots);
        this.steamMilk();

        return {
          ...coffee,
          hasMilk: true
        }
      }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine('Ji', 50);

    console.log(latteMachine.makeCoffee(2));
  }
}