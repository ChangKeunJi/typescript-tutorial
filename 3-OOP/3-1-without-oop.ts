{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {

    // 커피를 만들만큼의 커피 콩들이 남아있는지 확인한다. 
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error('Not enough beans!');
    }

    // 만든 만큼 커피 콩들을 빼준다.
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;

    return {
      shots,
      hasMilk: false
    }
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  console.log(makeCoffee(2))

}