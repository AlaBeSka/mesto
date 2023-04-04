export class Section {
  constructor ({renderer}, containerSelector) {
    this._renderer = renderer;
    this._conatiner = document.querySelector(containerSelector);
  }

  renderItems(res) {
    res.forEach(this._renderer);
  }

  addItem(element) {
    this._conatiner.prepend(element);
  }
}
