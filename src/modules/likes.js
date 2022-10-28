const apiKey = 'joCHrYXsTSpxjlRC4nhW';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes/`;

export function likePost() {
  const likeBtns = document.querySelectorAll('.likes-btn');
  const cardSection = document.querySelectorAll('.image-container');
  const likeCount = document.querySelectorAll('.count-text');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btn.style.color = 'red';
      likeCount[index].innerHTML = Number(likeCount[index].innerHTML) + 1;
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          item_id: cardSection[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
}

export function getLikes() {
  const cardSection = document.querySelectorAll('.image-container');
  const likeCount = document.querySelectorAll('.count-text');
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cardSection.forEach((item, index) => {
        data.forEach((item) => {
          if (item.item_id === cardSection[index].id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
}
