//Модуль 5. Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = ['the', 'early', 'bird', 'catches', 'the', 'worm'];
let counter = 0;

for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++)
       if (arr[i] == arr[k] && i != k) {
         console.log (`Одинаковые элементы: ${i + 1}-й и ${k + 1}-й`);
         counter++;
       }
}

counter > 0 ? console.log('true'): console.log('false');
