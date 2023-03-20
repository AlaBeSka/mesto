export class Section {
  constructor ({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._conatiner = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._conatiner.prepend(element);
  }
}
