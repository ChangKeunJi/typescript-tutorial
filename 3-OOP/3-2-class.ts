{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }



  class CoffeeMaker {

    // 멤버 변수 / instance(object) level
    coffeeBeans: number = 0;

    // STATIC 변수(주로 정적 변수) / class level / 사용할 때 this 대신 클래스 이름을 지정한다.
    static BEANS_GRAM_PER_SHOT: number = 7;

    // 인스턴스를 만들 때 호출되는 함수 
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // STATIC 함수 : 외부에서 클래스 level에서 인스턴스 생성없이 호출가능하다. / ex) Math.abs() - abs()는 클래스 level 함수
    static makeMachine(coffeeBeans: number): CoffeeMaker { // 클래스도 하나의 타입이 될 수 있다. 
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {

      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false
      }
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker)

  const maker2 = CoffeeMaker.makeMachine(3);
  console.log(maker2)
}