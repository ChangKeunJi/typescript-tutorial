{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string | null;
  }

  type Node = {
    readonly value: string;
    readonly next?: Node;
  }

  class Stack implements Stack {
    private _size: number = 0
    private head?: Node;

    get getSize() {
      return this._size;
    }


    push(value: string): void {

      const node: Node = {
        value,
        next: this.head
      }

      this.head = node;
      this._size++;

    }

    pop(): string {
      if (!this.head) return 'Nothing inside';

      this._size--;
      const lastNode = this.head;
      this.head = lastNode.next;
      return lastNode.value;
    }

  }

  const stack = new Stack();
  stack.push('a');
  stack.push('b');
  stack.push('c');
  while (stack.getSize > 0) {
    console.log(stack.pop());
  }
}