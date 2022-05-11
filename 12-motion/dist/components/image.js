"use strict";
class ImageComponent {
    constructor(img, text) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'image');
        this.imgTag = document.createElement('img');
        this.imgTag.setAttribute('src', img);
        this.textTag = document.createElement('p');
        this.textTag.textContent = text;
    }
}
