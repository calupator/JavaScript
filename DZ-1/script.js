// Задание-1
const celsius = Number.parseInt(prompt('Введите температуру в градусах Цельсия.'));
const result = 9 / 5 * celsius + 32;
alert('В Цельсиях: ' + celsius + ' C\nВ Фаренгейтах: ' + result.toFixed(1) + ' F');

// Задание-2
const name = 'Дима';
const admin = name;
console.log(admin);