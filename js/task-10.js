// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  createCollectionBtn: document.querySelector('button[data-create]'),
  deleteCollectionBtn: document.querySelector('button[data-destroy]'),
  divContainer: document.querySelector('#boxes'),
};

refs.createCollectionBtn.addEventListener('click', onClickCreateCollectionBtn);
refs.deleteCollectionBtn.addEventListener('click', destroyBoxes);

function onClickCreateCollectionBtn(event){
  destroyBoxes();
  if (refs.input.value){
    createBoxes(refs.input.value);    
  }
}

function createBoxes(amount){
  let BoxesEl="";
  for(let i=0; i<amount; i+=1){
    BoxesEl+=`<div style="width: ${30+i*10}px; height: ${30+i*10}px; background-color: ${getRandomHexColor()}; margin-left: ${(amount-i)*5}px"></div>`;
  }
  
  refs.divContainer.insertAdjacentHTML("afterbegin", BoxesEl);

}

function destroyBoxes(){
  refs.divContainer.innerHTML="";
}

  
