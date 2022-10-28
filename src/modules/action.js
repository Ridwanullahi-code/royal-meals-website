/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable max-classes-per-file */
import { PopUp, displayPopupWindow } from './popup.js';
import { getLikes, likePost } from './likes.js';
import { getComments } from './comments.js';

export class Main {
  static main() {
    const mainPage = document.querySelector('.meals');
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.meals.forEach((item) => {
          mainPage.innerHTML += `

				<div class="image-container" id="${item.idMeal}">
					<img class="image" src="${item.strMealThumb}" alt="meal-image" height="70%" width="70%">
					<div class="likes">
						<p>${item.strMeal}</p>
							<div class="like-container">
						<button class="likes-btn">
							<i class="fa-regular fa-heart" id="hearts"></i>
						</button>
						<div class="span">
							<span class="count-text">0</span>
							<span>likes</span>
						</div>
					</di>
					<ul class="users-sections">
						<li class="comments" id="${item.idMeal}">
							<a href="#" class="comment-btn get-img">Commnets</a>
						</li>
					</ul>
    		</div>
   		 `;
        });
        getLikes();
        likePost();
        displayPopupWindow();
      });
  }
}

export class Action {
  static comment() {
    const close = document.querySelector('.meals');
    close.addEventListener('click', (e) => {
      if (e.target.classList.contains('comment-btn')) {
        // const commentBtn = document.querySelectorAll('.comments');
        // commentBtn.forEach((button) => {
        //   PopUp.commentPop(button.id);
        // });
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

export default { Action, Main };
