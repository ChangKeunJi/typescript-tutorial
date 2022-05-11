import { InputDialog } from './components/dialog/dialog.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
import ImageComponent from './components/page/item/image.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
