import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
// -> 자바스크립트로 컴파일 시 import 경로는 수정하지 않기 때문에 파일 확장자로 js를 사용한다. 

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('image title', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('note title', 'this is note');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('todo title', 'todo body');
    todo.attachTo(appRoot, 'beforeend');

  }

}

new App(document.querySelector('.document')! as HTMLElement);

console.log('Hello')