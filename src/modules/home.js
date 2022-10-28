/* eslint-disable no-tabs */
import { displayPopupWindow } from './popup.js';
import { getLikes, likePost } from './likes.js';

const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
export default class Main {
  static main() {
    const mainPage = document.querySelector('.meals');
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.meals.forEach((item) => {
          mainPage.innerHTML += `

				<div class="image-container" id="${item.idMeal}">
          <div class="meal-cont">
					<img class="image" src="${item.strMealThumb}" alt="meal-image" height="70%" width="70%">
          </div>
					<div class="likes">
						<p class="meal-title">${item.strMeal}</p>
							<div class="like-container">
						<div class="span">
              <button class="likes-btn">
                <i class="fa-regular fa-heart" id="hearts"></i>
              </button>
							<span class="count-text">0</span>
							<span>likes</span>
						</div>
					</di>
					<ul class="users-sections">
						<li class="comments" id="${item.idMeal}">
							<a href="#" class="comment-btn get-img">Comments</a>
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