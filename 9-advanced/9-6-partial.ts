{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  }

  const todo: Todo = {
    title: 'hello',
    description: 'bye',
    label: 'abcd',
    priority: 'high'
  }

  // 기존 타입 중에서 부분적인 부분만 인자로 받고 싶을 때 
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate }
  }

  updateTodo(todo, { priority: 'low' });
  // -> Todo 타입에 속한 속성만 인수로 올 수 있다. 

}