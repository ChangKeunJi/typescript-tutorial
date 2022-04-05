{
  type Video = {
    title: string;
    author: string;
  }

  // -> 위 타입을 변형해서 새로운 타입을 만들고 싶을 때 

  type Optional<T> = {
    [P in keyof T]?: T[P]; // -> keyof는 T의 모든 Key들을 반환하고 in 은 그들 중 하나.
  }

  type VideoOptional = Optional<Video>;
  // -> Video의 속성들은 이제 필수로 존재하지 않아도 된다. 

  const videoOp: VideoOptional = {
    title: 'hello',
  }

  // ---------------------------------------

  // Optional 타입을 따로 만들지 않고 바로 사용해도 된다. 
  type Animal = {
    name: string;
    age: number
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }

  const cat: Optional<Animal> = {
    name: 'kitty'
    // age 속성이 없어도 Error가 나지 않는다. 
  }

  const dog: ReadOnly<Animal> = {
    name: 'Bob',
    age: 3
  }

  // dog.age = 5; -> Error

  // ---------------------------------------

  type Nullable<T> = {
    [P in keyof T]: T[P] | null
  }

  const bird: Nullable<Animal> = {
    name: 'Jane',
    age: null // Number가 아닌 null이 와도 Error가 나지 않는다. 
  }



} 