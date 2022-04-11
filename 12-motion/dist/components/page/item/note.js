import { BaseComponent } from './../../component.js';
export class NoteComponent extends BaseComponent {
    constructor(title, body) {
        const innerString = `
    <section class="note">
      <h2 class="note__title"></h2>
      <p class="note__body"></p>
    </section>
`;
        super(innerString);
        console.log(this);
        const titleElement = this.element.querySelector('.note__title');
        titleElement.textContent = title;
        const bodyElement = this.element.querySelector('.note__body');
        bodyElement.textContent = body;
    }
}
