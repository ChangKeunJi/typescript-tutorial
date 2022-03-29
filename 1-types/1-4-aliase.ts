{
  // Type Aliases : 새로운 타입을 정의할 수 있다. 

  type Text = string;
  const name: Text = 'Hello';

  type Student = {
    name: string;
    age: number;
  }

  const student1: Student = {
    name: 'Ji',
    age: 23
  }

  // String Literal Types
  // : 타입의 종류가 아닌 실제 값을 타입으로 지정
  type Name = 'Ji' | 'Kim';
  // let name1: Name = 'Kim'; // Error
  let name2: Name = 'Ji'; // 오직 미리 정해놓은 'Ji'만 올 수 있다.
  let name3: Name = 'Kim';



}