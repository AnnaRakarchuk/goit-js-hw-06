// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCollection = document.querySelector(`#boxes`);
const ref = {
  id: document.querySelector(`#controls`),
  input: document.querySelector(`input`),
  btnCreate: document.querySelector(`[data-create]`),
  btnDestroy: document.querySelector(`[data-destroy]`),
}

ref.btnCreate.addEventListener('click', onInputClick); // додає на кнопку фун-нал

function onInputClick(event){
  const newDiv = Number(ref.input.value);
  createBox(newDiv);
}

function createBox(amount){ // створення колекції елементів
  const width = 30;
  const height = 30;
  let addValue = 0;

  const elements = []; // масив елементів, який будемо додавати

  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement(`div`); // створюємо навий div
    divEl.classList.add(`box`);
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = width + addValue + `px`;
    divEl.style.height = height + addValue + `px`;

    addValue += 10; // збільшуємо значення розмірів елементів
    elements.push(divEl); // додаємо елемент в масив
  }
btnCollection.append(...elements); // додаємо в html
};

ref.btnDestroy.addEventListener(`click`, destroyBoxes); //додаємо на кнопку фун-нал видалення
function destroyBoxes(){
  btnCollection.innerHTML ="";
}