/* eslint-disable array-callback-return */
const apiKey = 'joCHrYXsTSpxjlRC4nhW';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`;

function commentCounter(data, link) {
  link.innerHTML = `Comments (${data.length})`;
  return data.length;
}

const getComments = async (id) => {
  const commentTitle = document.querySelector('.comment-count');
  commentTitle.innerHTML = 'Comments (0)';
  await fetch(`${url}?item_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      commentCounter(data, commentTitle);
      const commentList = document.querySelector('.comment-list');
      commentList.innerHTML = '';
      data.map((comment) => {
        const addingComment = document.createElement('li');
        addingComment.classList.add('comment-elements');
        if (comment.comment === '' || comment.username === '') {
          return;
        }
        addingComment.innerHTML = `
          Username: <span>${comment.username}</span> |
          Comment: <span>${comment.comment}</span> |
          Date: <span>${comment.creation_date}</span>
        `;
        commentList.appendChild(addingComment);
      }).join('');
    });
};

const postComments = async (username, comment, id) => {
  await fetch(url, {
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
};

export { postComments, getComments };