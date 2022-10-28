import MealApi from './__mock__/mockApi.js';
import Comment from './__mock__/mockDom.js';

describe('Testing the total number of meals', () => {
  const meal = new MealApi();
  meal.post({ item_id: 5, name: 'Pate Chinosis', likes: 10 });
  test(`Total number of meals supposed to be: ${meal.get().length}`, () => {
    expect(meal.get().length).toBe(5);
  });
});

describe('Testing the total number of meals', () => {
  const comment = new Comment();
  comment.sendComment({ id: 4, username: 'Ridwan', comment: 'Lovely Food' });
  test(`Total number of comment: ${comment.getComment().length}`, () => {
    expect(comment.getComment().length).toBe(4);
  });
});
