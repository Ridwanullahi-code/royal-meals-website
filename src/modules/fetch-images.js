/* eslint-disable no-tabs */
// eslint-disable-next-line no-tabs
const uri = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
const fetchImages = fetch(uri);

const mainPage = document.querySelector('.meals');

const fetchImagesApi = () => {
  fetchImages
    .then((response) => response.json())
    .then((data) => {
      data.meals.forEach((item) => {
        mainPage.innerHTML += ` 
				
				<div class="image-container">
					<img src="${item.strMealThumb}" alt="" height="70%" width="70%">
					<div class="likes">
						<p>Serving two plages</p>
						<i class="fa-regular fa-heart"></i>
					</div>
					<div class="likes-counter">
						<p>2 likes</p>
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
    });
};

module.exports = fetchImagesApi;