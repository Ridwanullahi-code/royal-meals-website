/* eslint-disable no-console */
import { postComments, getComments } from './comments.js';

class PopUp {
  static commentPop = (id) => {
    const section = document.querySelector('.meals');
    section.innerHTML = `
    <div class="container">
      <div class=first-box>
        <img class="image" src="meals.jpg" alt ="meal-image">
        <i class="fa-solid fa-xmark close"></i>
      </div>
      <h2>Meal 3</h2>
      <div class="grid-container">
        <ul class="comment-list"></li>
      </div>
      <div class="comment-section">
        <h3 class="comment-title">Comment (2)</h3>
        <div class="display-com">
        <p class = "time">2021: </p>
      </div>
      <form class="form" id=${id}>
        <h3>Add a comment</h3>
        <input class="name" type="text" placeholder="Your name" required>
        <textarea class="subject" cols = 30 rows = 5 placeholder="Your insights" required></textarea>
        <input class="submit-comment" type="submit" value="Comment">
      </form>
    </div>
    `;
    const form = document.querySelector('.form');
    const username = document.querySelector('.name');
    const comments = document.querySelector('.subject');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      postComments(username.value, comments.value, id);
      username.value = '';
      comments.value = '';
    });
  };
}

function displayPopupWindow() {
  const buttons = document.querySelectorAll('.comments');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      PopUp.commentPop(btn.id);
      getComments(btn.id);
    });
  });
}

export { displayPopupWindow, PopUp };
