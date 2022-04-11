
// api(메서드)가 있다면, 클래스보다는 인터페이스를 전달하는것이 낫다. 
export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void
}

export class BaseComponent<T extends HTMLElement> implements Component {

  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;

    this.element = template.content.firstElementChild! as T;

  }

  // type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }

}