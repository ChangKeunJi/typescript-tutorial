import { InputDialog } from './components/dialog/dialog.js';
// import { TodoComponent } from './components/page/item/todo.js';
// import { NoteComponent } from './components/page/item/note.js';
// import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import ImageComponent from './components/page/item/image.js'
import { Component } from './components/component.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
// 타입스크립트는 js로 컴파일시 import하는 경로는 변경하지 않가애 js로 사용한다. 

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {

    this.page = new PageComponent(PageItemComponent); // 생성자를 전달한 뒤 PageComponent가 내부에서 생성자 호출
    this.page.attachTo(appRoot);



    // --------------------------------------------------------

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;

    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      // 인풋 attach
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection)

      // body 등록
      dialog.attachTo(dialogRoot);

      // 리스너 등록
      dialog.setOnCloseListenr(() => {
        dialog.removeFrom(dialogRoot)
      });

      dialog.setOnSubmitListenr(() => {
        // 섹션 추가됨
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);

        dialog.removeFrom(dialogRoot);
      })


    })



  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body)

// 인수 타입은 HTMLElement이지만, 위 인수는 null을 반환할 수도 있기에 에러가 난다.
// 동적으로 결정되는 것이 아니기에 확신이 있다면 HTMLElement로 지정하고 전달해준다. 


/*

const image = new ImageComponent('Image Title', '../assets/postie2.jpg')

const note = new NoteComponent('Note Title', 'Note Body');

const todo = new TodoComponent('Todo Title', 'Todo');

const video = new VideoComponent('Video Title', `https://www.youtube.com/embed/0-UaleJZOw8`)

this.page.addChild(image);
this.page.addChild(note);
this.page.addChild(todo);
this.page.addChild(video);

*/