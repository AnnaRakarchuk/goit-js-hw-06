const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');

const elements = [];
for(let i = 0; i < ingredients.length; i+= 1 ){
const elem = ingredients[i];

const ilEl = document.createElement('li');
ilEl.textContent = elem;
ilEl.classList.add('item');

elements.push(ilEl);
}



ulEl.append(...elements);

