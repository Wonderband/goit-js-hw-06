const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map(ingr => {
  const listItem = document.createElement('li');
  listItem.innerHTML = ingr;
  listItem.classList.add('item');
  return listItem;
});
document.querySelector('#ingredients').append(...listItems);


