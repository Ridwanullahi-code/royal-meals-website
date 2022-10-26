import PopUp from './popup.js';
import Main from './home.js';

export default class Action {
  static comment() {
    const close = document.querySelector('.meals');
    close.addEventListener('click', (e) => {
      if (e.target.classList.contains('comment-btn')) {
        PopUp.commentPop();
        const container = document.querySelector('.container');
        container.classList.toggle('show');
      }
    });
  }

  static reservate() {
    const close = document.querySelector('.meals');
    close.addEventListener('click', (e) => {
      if (e.target.classList.contains('reserve-btn')) {
        PopUp.commentPop();
        const container = document.querySelector('.container');
        container.classList.toggle('show');
      }
    });
  }

  static removePop() {
    const close = document.querySelector('.meals');
    close.addEventListener('click', (e) => {
      if (e.target.classList.contains('close')) {
        const container = document.querySelector('.container');
        container.classList.remove('show');
        Main.main();
      }
    });
  }
}