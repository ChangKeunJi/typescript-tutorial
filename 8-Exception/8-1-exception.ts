{
  function readFile(fileName: string): string {
    if (fileName === 'Not exist') {
      throw new Error('No file !!')
    }
    return 'file contents !!'
  }

  function closeFile(fileName: string) {
    console.log('close file ##');
  }

  const fileName = 'Not exist1';

  // console.log(readFile(fileName));
  // -> Error 생성되며 App은 실행 중지되어 이후 코드는 실행되지 않는다. 
  // -> Error가 발생할 수 있을 때는 Try Catch 사용한다. 

  function run() {

    try {
      console.log(readFile(fileName));
    } catch (err) {
      console.log('Catched!!: ', err)
      // -> Error를 Catch해서 잡았기 때문에 코드 실행이 멈추지 않는다. 
      //-> try 블럭의 Error가 인자로 넘어온다. 
    } finally {
      console.log('Close File!!')
      // -> 성공 실패 여부 상관없이 무조건 실행된다. 
    }

    closeFile(fileName)
    // -> 만약 Try..Catch 블럭 안에서 return 해버리면 블럭 바깥은 실행되지 않기에 finally에 포함시키는것이 좋다. 
  }

  run();

} 