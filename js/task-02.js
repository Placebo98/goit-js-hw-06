const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const arr = ingredients.map((ingredient) => {
  const itemEL = document.createElement("li");

  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  return itemEL;

  arr.push(itemEL);
});

// console.log(listEL)

const listEl = document.querySelector("#ingredients");

listEl.append(...arr);

