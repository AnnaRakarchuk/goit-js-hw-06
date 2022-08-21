// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const input = document.querySelector('#name-input');

const title = document.querySelector('#name-output');
input.addEventListener('input', newInp);

function newInp(a) {
    title.textContent = a.currentTarget.value;
    if (a.currentTarget.value === " ") {
        title.textContent = "Anonymous"
    }
}