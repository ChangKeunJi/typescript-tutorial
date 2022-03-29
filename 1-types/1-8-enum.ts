{

  // 열거형으로 이름이 있는 상수들의 집합을 정의

  enum Days {
    // 값을 정하지 않으면 자동으로 숫자 0부터 순차적으로 할당된다
    // MON에 1을 할당할 경우 나머지는 자동적으로 2부터 시작해서 할당된다
    MON = 1, TUE, WED, THU, FRI, SAT, SUN
  }

  console.log(Days)

  // !! 가능한 사용하지 않는 것이 좋다

  let day: Days = Days.MON;
  day = 99; // => Days 타입으로 지정된 변수에 다른 숫자도 올 수 있다.

  // 대신 Union로 대체 가능 

  type Days2 = 'Mon' | 'Tue' | 'WED';

  let day2: Days2 = 'Mon' // 셋 중 하나만 올 수 있다
  // day2 = 'Hello'; => error


}