// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const incrCounterBtn = document.querySelector('[data-action="increment"]');
const decrCounterBtn = document.querySelector('[data-action="decrement"]');
const counterSpnEl=document.querySelector('#value');
let counterValue=0;

incrCounterBtn.addEventListener('click', event => {
    counterValue+=1;
    counterSpnEl.textContent=counterValue;
  });
  
  decrCounterBtn.addEventListener('click', event => {
    counterValue-=1;
    counterSpnEl.textContent=counterValue;
  });
  
