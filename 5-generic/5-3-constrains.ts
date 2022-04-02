{
  interface Employee {
    pay: () => void;
  }

  class FulltimeEmployee implements Employee {
    pay() {
      console.log('Working Fulltime !!')
    }

    workFulltime() { }
  }

  const ellie = new FulltimeEmployee();

  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  const ellieAfterPay = pay(ellie);

  // ellieAfterPay.workFulltime(); 
  // -> pay 함수가 리턴하는 타입이 Employee이기 때문에 workFulltime을 기억하지 못한다.
  // -> 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 BAD!!

  function pay2<T extends Employee>(employee: T): T {
    // -> extends 키워드 때문에 Employee를 확장한 인자로 올 수 있다. 
    // -> extends 키워드 없이는 아무 타입이나 올 수 있기에 pay 함수를 사용하지 못한다. 
    employee.pay();
    return employee;
  }

  const ellieAfterPay2 = pay2(ellie);

  ellieAfterPay2.workFulltime();

  // ------------------

  const obj1 = {
    name: 'Ji',
    age: 33,
  }

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj1, 'name'));
  console.log(getValue(obj1, 'age'));
  console.log(getValue(obj1, 'age'));

}