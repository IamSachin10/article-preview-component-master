class App {
  constructor() {
    this.icon = document.querySelector('[data-id="icon-share"]');
    this.toggleShareMenu = document.querySelector('.hidden');
  }

  init() {
    this.icon.addEventListener('click', (e) => {
      e.preventDefault();
      this.hide();
    });
  }

  hide() {
    if (this.toggleShareMenu.style.display === 'none') {
      this.toggleShareMenu.style.display = 'flex';
    } else {
      this.toggleShareMenu.style.display = 'none';
    }
  }
}

const dom = new App();

dom.init();
