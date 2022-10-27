/* eslint-disable no-tabs */
// eslint-disable-next-line no-tabs

export default class Main {
  static main() {
    const mainPage = document.querySelector('.meals');
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.meals.forEach((item) => {
          mainPage.innerHTML += `
				<div class="image-container">
					<img class="image" src="${item.strMealThumb}" alt="meal-image" height="70%" width="70%">
					<div class="likes">
						<p>Serving two plages</p>
						<i class="fa-regular fa-heart"></i>
					</div>
					<div class="likes-counter">
						<p>2 likes</p>
					</div>
					<ul class="users-sections">
						<li class="comments">
							<a href="#" class="comment-btn get-img">Commnets</a>
						</li>
					<li class="reservations">
						<a href="#" class="reserve-btn get-img">Reservations</a>
					</li>
					</ul>
    	</div>
    `;
        });
      });
  }
}
