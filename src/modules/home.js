export default class Main {
  static main() {
    const mainPage = document.querySelector('.meals');
    for (let i = 0; i < 6; i += 1) {
      mainPage.innerHTML += `
<div class="image-container">
<img src="meals.jpg" alt="meal-image" height="70%" width="70%">
<div class="likes">
<p>Serving two plages</p>
<i class="fa-regular fa-heart"></i>
</div>
<div class="likes-counter">
<p>2 likes</p>
</div>
<ul class="users-sections">
<li class="comments">
<a href="#" class="comment-btn">Commnets</a>
</li>
<li class="reservations">
<a class="reserve-btn" href="#">Reservations</a>
</li>
</ul>
</div>
`;
    }
  }
}
