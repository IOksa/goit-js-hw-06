// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInputEl=document.querySelector('#validation-input');

textInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event){
    if(event.currentTarget.value.length===Number(textInputEl.getAttribute('data-length'))){
        textInputEl.classList.add('valid'); 
        textInputEl.classList.remove('invalid');
    }else{
        textInputEl.classList.add('invalid'); 
        textInputEl.classList.remove('valid');
    }

}