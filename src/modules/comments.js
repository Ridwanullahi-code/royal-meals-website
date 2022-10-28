/* eslint-disable no-alert */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const apiKey = 'joCHrYXsTSpxjlRC4nhW';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`;

function countingComments(data, link) {
  link.innerHTML = `Recipes (${data.length})`;
  return data.length;
}

const getComments = async (id) => {
  const commentTitle = document.querySelector('.comment-title');
  commentTitle.innerHTML = 'Comments (0)';
  await fetch(`${url}?item_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      countingComments(data, commentTitle);
      const commentList = document.querySelector('.comment-list');
      commentList.innerHTML = '';
      data.map((comment) => {
        const addingComment = document.createElement('li');
        if (comment.comment === '' || comment.username === '') {
          return;
        }
        addingComment.innerHTML = `
          <span>${comment.comment}</span>
          <span>${comment.username}</span>
          <span>${comment.creation_date}</span>
        `;
        commentList.appendChild(addingComment);
      }).join('');
    });
};

function postComments(username, comment, id) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    getComments(id);
  });
}

export { postComments, getComments };