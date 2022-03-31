{

  function checkNotNull(arg: number | null): number {
    if (arg === null) throw new Error('This is null');
    return arg;
  }

  const numberOrNull = 33;
  const result = checkNotNull(numberOrNull); // result의 타입은 Number가 된다. 

  // -> Null인지 아닌지 체크해주기 위해서 모든 타입별로 함수를 만들 수는 없다. 
  // -> any를 사용해도 되지만, result 변수의 타입 역시 any가 되는 단점이 있다. 

  // Null이 아닐 때만 똑같은 타입으로 리턴해준다. 
  function checkNotNull2<GENERIC>(arg: GENERIC): GENERIC { // : 보통 GENERIC 대신 T하나로 사용한다. 
    if (arg === null) throw new Error('This is null');
    return arg;
  }

  let result3 = checkNotNull2(33);
  // result3 = 'Hello'; -> number 타입이기에 할당되지 않는다. 

  let result4: boolean = checkNotNull2(true);
  result4 = false;

}