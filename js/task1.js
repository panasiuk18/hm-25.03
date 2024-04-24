//* Завдання 1
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:
// let arr = [3, -2, 5, 6, -8, 2];

function removeNegatives(arr) {
    if (arr.some(num => num < 0)) {
    
        return arr.filter(num => num > 0);
    } else {
        return "No negative numbers found";
    }
}

let arr = [3, 2, -5, 6, -8, 2];
console.log(removeNegatives(arr));