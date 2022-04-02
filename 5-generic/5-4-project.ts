{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T | null;
  }

  type Node = {
    readonly value: any;
    readonly next?: Node;
  }

  class Stack<T> implements Stack<T> {
    private _size: number = 0
    private head?: Node;

    get getSize() {
      return this._size;
    }


    push<T>(value: T): void {

      const node: Node = {
        value,
        next: this.head
      }

      this.head = node;
      this._size++;

    }

    pop(): T {
      if (!this.head) throw new Error('Nope')

      this._size--;
      const lastNode = this.head;
      this.head = lastNode.next;
      return lastNode.value;
    }

  }

  const stack = new Stack<string>();
  stack.push(3);
  stack.push(1);
  stack.push(5);
  // while (stack.getSize > 0) {
  //   console.log(stack.pop());
  // }

  const pop = stack.pop();
  console.log(pop)
}