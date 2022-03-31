{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // 외부에서 클래스의 상태를 변경하지 못하게 해야 한다. 
  // : 인스턴스가 coffeeBeans의 개수를 변경하지 못하게 해야한다. 
  // public / 외부에서 접근 가능
  // private / 외부에서 볼 수 없다 
  // protected / 외부에서 접근 불가능하지만, 자손 클래스에서는 가능

  // static이 붙으면, 인스턴스에서 접근가능하지 않고 클래스 레벨에서만 접근가능하다. 

  class CoffeeMaker {

    // 멤버 변수 / instance(object) level
    private coffeeBeans: number = 0;

    // STATIC 변수(주로 정적 변수) / class level / 사용할 때 this 대신 클래스 이름을 지정한다.
    private static BEANS_GRAM_PER_SHOT: number = 7;

    // 인스턴스를 만들 때 호출되는 함수 
    private constructor(coffeeBeans: number) { // private를 붙이면, 메소드를 통해서만 인스턴스를 생성하도록 유도한다. 
      this.coffeeBeans = coffeeBeans;
    }

    // STATIC 함수 : 외부에서 클래스 level에서 인스턴스 생성없이 호출가능하다. / ex) Math.abs() - abs()는 클래스 level 함수
    static makeMachine(coffeeBeans: number): CoffeeMaker { // 클래스도 하나의 타입이 될 수 있다. 
      return new CoffeeMaker(coffeeBeans);
    }

    // 함수를 통해서만 상태를 변경할 수 있다. 
    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error('커핑콩은 0보다 커야합니다.')

      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(3);

  class User {
    get getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 17;

    set age(num: number) {
      this.internalAge = num;
    }

    get age(): number {
      return this.internalAge;
    }

    constructor(private firstName: string, private lastName: string) {
    }
  }

  const user = new User('Ck', 'Ji');

  console.log(user.getFullName); // Chang Ji
  // 함수이지만, 멤버 변수처럼 접근한다. 

  user.age = 99; // set 작동
  console.log(user.age) // get 작동

}