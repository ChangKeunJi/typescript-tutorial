{

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name'];
  // -> Type을 마치 객체처럼 사용한다. 
  const name: Name = 'Bob'; // -> string만 올 수 있다. 

  type Gender = Animal['gender'];
  const gender: Gender = 'female';

  type Keys = keyof Animal;
  const key: Keys = 'name' // 'name', 'age', 'gender'만 올 수 있다. 

  type Person = {
    name: string;
    gender: Animal['gender'] // 'male' or 'female
  }

}