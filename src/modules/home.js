/* eslint-disable no-tabs */
// eslint-disable-next-line no-tabs
import { getLikes, likePost } from './likes.js';

export default class Main {
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
						<li class="comments">
							<a href="#" class="comment-btn get-img">Commnets</a>
						</li>
					</ul>
    	</div>
   		 `;
        });
        getLikes();
        likePost();
      });
  }
}
