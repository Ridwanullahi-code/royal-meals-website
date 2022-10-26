/* eslint-disable no-tabs */
// eslint-disable-next-line no-tabs, no-unused-vars
import { likePost, getLikes } from './likes.js';

const uri = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const mainPage = document.querySelector('.meals');

const fetchImagesApi = () => {
  fetch(uri)
    .then((response) => response.json())
    .then((data) => {
      data.meals.forEach((item) => {
        mainPage.innerHTML += ` 
				
		<div class="image-container" id="${item.idMeal}">
			<img src="${item.strMealThumb}" alt="" height="70%" width="70%">
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
				</div>	
			</div>
			<ul class="users-sections">
				<li class="comments">
					<a href="#">Commnets </a>
				</li>
			<li class="reservations">
				<a href="#">Reservations</a>
			</li>
			</ul>
    	</div>
    `;
      });
      getLikes();
      likePost();
    });
};

export default fetchImagesApi;