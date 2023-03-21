// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const counterSpnEl=document.querySelector('#value');
let counterValue=0;

addListenerBtn.addEventListener('click', event => {
    counterValue+=1;
    counterSpnEl.textContent=counterValue;
  });
  
  removeListenerBtn.addEventListener('click', event => {
    counterValue-=1;
    counterSpnEl.textContent=counterValue;
  });
  
