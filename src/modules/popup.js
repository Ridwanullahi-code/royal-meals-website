/* eslint-disable no-console */
import { postComments, getComments } from './comments.js';

const uri = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const commentPopupContainer = document.querySelector('.comment-popup');
const mealImage = document.querySelector('.meal-img');
const imageTitle = document.querySelector('.image-title');
const mealRecipe = document.querySelector('.meal-recipe');
const close = document.querySelector('.close');

class PopUp {
  static commentPop = (id) => {
    const section = document.querySelector('.comment-form');
    section.innerHTML = `
      <form class="form" id=${id}>
        <h3 class="form-title">Add a comment</h3>
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
      fetch(`${uri}${btn.id}`)
        .then((response) => response.json())
        .then((data) => {
          mealImage.setAttribute('src', data.meals[0].strMealThumb);
          imageTitle.innerHTML = data.meals[0].strMeal;
          mealRecipe.innerHTML = data.meals[0].strInstructions;
          commentPopupContainer.classList.remove('hidden');
        });
    });
  });
  close.addEventListener('click', () => {
    commentPopupContainer.classList.add('hidden');
  });
}

export { displayPopupWindow, PopUp };
