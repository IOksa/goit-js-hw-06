// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector('.change-color');
const spanEl=document.querySelector('.color');
const bodyEl=document.querySelector('body');

changeColorBtn.addEventListener('click', event => {
  console.log("event=", event);
  const randomColor=getRandomHexColor();
  console.log("randomColor=", randomColor);
  spanEl.textContent=randomColor;
  bodyEl.style.backgroundColor=randomColor;


  
});
