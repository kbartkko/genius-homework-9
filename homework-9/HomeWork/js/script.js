// Домашнє завдання
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const text = document.querySelector('#text');
// const btn = document.querySelector('#btn');

// const hideText = () => {
//     text.style.display = "none";
// }

// btn.addEventListener("click", hideText);


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btn = document.querySelector('#btn');

// const hideButton = () => {
//     btn.style.display = "none";
// };

// btn.addEventListener("click", hideButton);


// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці


const items = document.querySelectorAll('.tree')

items.forEach(item => {
    item.addEventListener('click', function (event) {
        const child = item.querySelector('ul');
        if (child) {
            child.style.display = child.style.display === 'none' ? 'block' : 'none';
        }
        event.stopPropagation();
    });
});

