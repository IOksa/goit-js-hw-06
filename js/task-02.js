// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const makeListItemElements=elements=>{
  return elements.map (element=>{
    const listItemEl=document.createElement('li');
    listItemEl.classList.add('item');
    listItemEl.textContent=element;
    return listItemEl;
  });
  
}

const ulEl=document.querySelector('#ingredients');
const elements=makeListItemElements(ingredients);

ulEl.prepend(...elements);