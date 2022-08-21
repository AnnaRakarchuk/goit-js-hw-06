const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


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

