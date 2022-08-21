// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};

document
  .querySelector("[data-action='increment']")
  .addEventListener('click', increment);

document
  .querySelector("[data-action='decrement']")
  .addEventListener('click', decrement);


