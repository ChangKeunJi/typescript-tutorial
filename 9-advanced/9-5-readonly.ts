{

  type Todo = {
    title: string;
    description: string;
  }

  // 이전에 만들었던 Partial, Optinal 이나 Readonly 타입은 이미 만들어져 있다. 

  // Required<T> -> Optional 타입을 반대로 모두 있어야 되는것으로 바꿔준다. 

  function display(todo: Readonly<Todo>) {
    // todo.title = 'jaja';  // Error
  }

}