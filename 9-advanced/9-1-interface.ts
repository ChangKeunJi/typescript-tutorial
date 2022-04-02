{

  interface PositionInterface {
    x: number;
    y: number;
  }

  type PositionType = {
    x: number;
    y: number;
  }

  // 공통점 
  // 1. object로 만들 수 있다. 
  const obj1: PositionInterface = {
    x: 1,
    y: 2
  }

  const obj2: PositionType = {
    x: 1,
    y: 2
  }

  // 2. 클래스로 구현 가능하다. 
  class Pos1 implements PositionType {
    x: 1
    y: 2
  }

  class Pos2 implements PositionInterface {
    x: 1
    y: 2
  }

  // 3. 확장 

  interface ZPositionInterface extends PositionType {
    z: number
  }

  type ZPositionType = PositionType & { z: number }
  const z: ZPositionInterface = { x: 1, y: 2, z: 3 }

  // 오직 인터페이스만 가능 - 중복 선언

  interface LetterAB {
    a: string
  }
  interface LetterAB {
    b: string
  }
  // -> 두 인터페이스가 합쳐진다. (타입은 중복 선언이 안된다.)

  const letter: LetterAB = { a: 'a', b: 'b' };

  // 오직 타입만 가능 

  type Person = {
    name: string,
    age: number
  }

  type Name = Person['name'] // -> 계산된 값이 타입으로 할당
  type Direction = 'left' | 'right' // -> Union 타입 

}