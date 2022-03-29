{

  // Array
  const string: string[] = ['a', 'b', 'c'];
  const string2: Array<string> = ['a', 'b'];
  function printArray(string: readonly string[]) {
    // string 배열을 수정할 수 없다. (ex push, pop ... )
  }

  // Tuple (권장되지 않는다.) -> interface, type, alias, class로 대체 가능
  // : 서로 다른 타입을 담을 수 있는 배열
  let student: [string, number];
  student = ['name', 123];

  // const [state, setState] = useState(); => Tuple의 예



}