export default class MealApi {
  collection = [
    {
      item_id: 1,
      name: 'BeaverTails',
      likes: 41,
    },

    {
      item_id: 2,
      name: 'Breakfast Potatoes',
      likes: 26,
    },
    {
      item_id: 3,
      name: 'Cannadian Butter Tarts',
      likes: 10,
    },

    {
      item_id: 4,
      name: 'Montreal Smoked',
      likes: 22,
    },
  ];

  get() {
    return this.collection;
  }

  post(data) {
    this.collection.push(data);
  }
}
