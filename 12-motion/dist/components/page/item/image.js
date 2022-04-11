import { BaseComponent } from './../../component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        const innerString = `<section class="image">
      <div class="image__holder">
        <img class="image__thumbnail" />
        <h2 class="image__title"></h2>
      </div>
      </section>`;
        super(innerString);
        const imageElement = this.element.querySelector('.image__thumbnail');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('.image__title');
        titleElement.textContent = title;
    }
}
