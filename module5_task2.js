//Модуль 5. Задание 2. Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число». Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let X;

if (typeof (X) === 'number' && Number.isNaN(X) === false) {
    console.log(`${X} - число`);
}
else if (typeof (X) === 'string') {
    console.log(`${X} - строка`);
}
else if (typeof (X) === 'boolean') {
    console.log(`${X} - логический тип`);
}
else  {
    console.log(`Тип ${X} не определен`);
}