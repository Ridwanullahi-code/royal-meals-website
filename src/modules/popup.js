export default class PopUp {
  static commentPop = () => {
    const section = document.querySelector('.meals');
    section.innerHTML = `
        <div class="container">
        <div class=first-box>
        <img class="image" src="./meals.jpg" alt ="meal-image">
        <i class="fa-solid fa-xmark close"></i>
        </div>
        <h2>Meal 3</h2>
        <div class="grid-container">
        <p class="grid-item">Fuel: titanium</p>
        <p class="grid-item">Length: 100,000</p>
        <p class="grid-item">Weight: 400</p>
        <p class="grid-item">Power: 100,00000</p>
        </div>
        <div class="comment-section">
        <h3>Comment (2)</h3>
        <div class="display-com">
        <p class = "time">2021: </p>
        </div>
        <form>
        <h3>Add a comment</h3>
        <input class="name" type="text" placeholder="Your name">
        <textarea cols = 30 rows = 5 placeholder="Your insights"></textarea>
        <input class="submit-comment" type="button" value="Comment">
        </form>
        </div>
        </div>
        `;
  };

    static reservatePop = () => {
      const section = document.querySelector('.meals');
      section.innerHTML = `
        <div class="container">
        <div class=first-box>
        <img class="image" src="./meals.jpg" alt ="meal-image">
        <i class="fa-solid fa-xmark close"></i>
        </div>
        <h2>Meal 3</h2>
        <div class="grid-container">
        <p class="grid-item">Fuel: titanium</p>
        <p class="grid-item">Length: 100,000</p>
        <p class="grid-item">Weight: 400</p>
        <p class="grid-item">Power: 100,00000</p>
        </div>
        <div class="comment-section">
        <h3>Comment (2)</h3>
        <div class="display-com">
        <p class = "time">2021: </p>
        </div>
        <form>
        <h3>Add a comment</h3>
        <input class="name" type="text" placeholder="Your name">
        <textarea cols = 30 rows = 5 placeholder="Your insights"></textarea>
        <input class="submit-comment" type="button" value="Comment">
        </form>
        </div>
        </div>
        `;
    }
}
