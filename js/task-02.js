
const ingredientsList = document.querySelector('#ingredients');
const ingredients = [ "Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments" ];
const items = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient; listItem.classList.add('item');
  items.push(listItem);
});
ingredientsList.append(...items);