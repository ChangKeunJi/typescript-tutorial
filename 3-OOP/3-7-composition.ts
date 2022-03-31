{
  {

    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?: boolean;
    }

    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother {
      makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
      addSugar(cup: CoffeeCup): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
      private coffeeBeans: number = 0;
      private static BEANS_GRAM_PER_SHOT: number = 7;

      // 클래스를 상속을 통해 물려주기 위해서는 자식 클래스에서 constructor를 호출해야 하기 때문에 
      // constructor 앞에 private는 안되고 public 혹은 protect를 사용해야 한다. 
      constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
        this.coffeeBeans = coffeeBeans;
      }

      // static makeMachine(coffeeBeans: number): CoffeeMachine {
      //   return new CoffeeMachine(coffeeBeans);
      // }

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
        const coffee = this.extract(shots);
        const sugarAdded = this.sugar.addSugar(coffee);
        return this.milk.makeMilk(sugarAdded);
      }

      clean() {
        console.log('clean !!')
      }
    }

    class CheapMilkSteamer implements MilkFrother {
      private steamMilk(): void {
        console.log('Steaming Cheap Milk !!');
      }

      makeMilk(cup: CoffeeCup): CoffeeCup {
        return {
          ...cup,
          hasMilk: true,
        }
      }
    }

    class FanchMilkSteamer implements MilkFrother {
      private steamMilk(): void {
        console.log('Steaming Fancy ❤️ Milk !!');
      }

      makeMilk(cup: CoffeeCup): CoffeeCup {
        return {
          ...cup,
          hasMilk: true,
        }
      }
    }

    class ColdMilkSteamer implements MilkFrother {
      private steamMilk(): void {
        console.log('Steaming Cold 💓 Milk !!');
      }

      makeMilk(cup: CoffeeCup): CoffeeCup {
        return {
          ...cup,
          hasMilk: true,
        }
      }
    }

    class CandySugarMixer implements SugarProvider {
      private getSugar(): boolean {
        // ... sugar 제조하는 로직
        console.log('Add some sugar !!');
        return true;
      }

      addSugar(cup: CoffeeCup): CoffeeCup {
        const sugar = this.getSugar();
        return {
          ...cup,
          hasSugar: sugar,
        }
      }
    }

    class RealSugarMixer implements SugarProvider {
      private getSugar(): boolean {
        // ... sugar 제조하는 로직
        console.log('Add some Real ❤️‍🔥 sugar !!');
        return true;
      }

      addSugar(cup: CoffeeCup): CoffeeCup {
        const sugar = this.getSugar();
        return {
          ...cup,
          hasSugar: sugar,
        }
      }
    }

    // class CaffeLatteMachine extends CoffeeMachine {

    //   constructor(private customerName: string, coffeeBeans: number, private milkFrother: MilkFrother) {
    //     super(coffeeBeans);
    //   }

    //   makeCoffee(shots: number): CoffeeCup {
    //     const coffee = super.makeCoffee(shots);
    //     return this.milkFrother.makeMilk(coffee);
    //   }
    // }


    // class SweetCoffeMaker extends CoffeeMachine {

    //   constructor(private beans: number, private sugar: SugarProvider) {
    //     super(beans);
    //   }

    //   getSugar() {
    //     console.log('Add some Sugar !!')
    //   }

    //   makeCoffee(shots: number): CoffeeCup {
    //     const coffee = super.makeCoffee(shots);
    //     this.getSugar();
    //     return {
    //       ...coffee,
    //       hasSugar: true,
    //     }
    //   }
    // }

    // 타입을 CandySugarMixer -> SugarProvider(Interface)으로 변경해주었기 때문에 
    // 한 가지 Sugar가 아닌 다양한 Sugar가 올 수 있다. (두 클래스간 커플링이 약해졌다.) 

    // class SweetCaffeeLatteMachine extends CoffeeMachine {
    //   constructor(private beans: number,
    //     private milk: MilkFrother,
    //     private sugar: SugarProvider) {
    //     super(beans)
    //   }

    //   makeCoffee(shots: number): CoffeeCup {
    //     const coffee = super.makeCoffee(shots);
    //     const sugarAdded = this.sugar.addSugar(coffee);
    //     return this.milk.makeMilk(sugarAdded);
    //   }

    // }

    // - Milk

    const cheapMilk = new CheapMilkSteamer();
    const fancyMilk = new FanchMilkSteamer();
    const coldMilk = new ColdMilkSteamer();

    // - Sugar
    const candySugar = new CandySugarMixer();
    const realSugar = new RealSugarMixer();

    // - SweetCoffeeMaker에 내가 원하는 Sugar를 넣을 수 있다. 
    // const sweetCandyMachine = new SweetCoffeMaker(12, candySugar);
    // const sweetRealMachine = new SweetCoffeMaker(12, realSugar);
    // const maker = new SweetCaffeeLatteMachine(50, cheapMilk, candySugar);

    // CoffeeMachine 하나로 Sugar와 Milk를 추가할 수 있다. 
    const fancyCandyMachine = new CoffeeMachine(12, fancyMilk, candySugar);
    const coldRealMachine = new CoffeeMachine(12, coldMilk, realSugar);


  }
}