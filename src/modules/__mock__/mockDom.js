export default class Comment {
    comments = [
      {
        id: 1,
        username: 'Jose',
        comment: 'This food is very taste',
      },
      {
        id: 2,
        username: 'Marry',
        comment: 'Nice food',
      },
      {
        id: 3,
        username: 'Anna',
        comment: 'Wow! nice food so far',
      },
    ];

    sendComment(comment) {
      this.comments.push(comment);
    }

    getComment() {
      return this.comments;
    }
}