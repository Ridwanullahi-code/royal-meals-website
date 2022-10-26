/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable no-tabs */
const apiKey = 'joCHrYXsTSpxjlRC4nhW';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes/`;

export function likePost() {
  const likeBtns = document.querySelectorAll('.likes-btn');
	// const likeBtnIcon = document.querySelectorAll('.fa-heart');
	const cardSection = document.querySelectorAll('.image-container');
	const likeCount = document.querySelectorAll('.count-text');
	likeBtns.forEach((btn, index) => {
		btn.addEventListener('click', () => {
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
