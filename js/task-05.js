// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInputEl=document.querySelector('#name-input');
const textOutputEl=document.querySelector('#name-output');

textInputEl.addEventListener('input', onInputChange);

function onInputChange(event){
    event.currentTarget.value===""?
    textOutputEl.textContent="Anonymous"
    :textOutputEl.textContent=event.currentTarget.value;
    
}