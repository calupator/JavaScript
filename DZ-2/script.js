// Задание-1
const num1 = Number.parseInt(prompt('Введите первое число:'));
if (num1 === 1 || num1 < 1)
	alert(num1 + ' - меньше или равна \'1\' - \'true\'');
else
	alert(num1 + ' - больше \'1\' - \'false\'');

const num2 = Number.parseInt(prompt('Введите второе число:'));
if (num1 > 3 || num1 === 3)
	alert(num2 + ' - больше или равна \'3\' - \'true\'');
else
	alert(num2 + ' - меньше \'3\' - \'false\'');


// Задание-2
let test = true;
console.log(test ? '+++' : '---');


// Задание-3
const day = Number.parseInt(prompt('Введите число от 1 до 31 включительно:'));
if (day < 11)
	alert('Первая декада');
else if (day < 21)
	alert('Вторая декада');
else
	alert('Третья декада');


// Задание-4
const num = Number.parseInt(prompt('Введите положительное число:'));

let tmp = num % 10;
let resulut = ', единиц: ' + tmp;
tmp = ', десятков: ' + Math.trunc((num / 10) % 10);
resulut = tmp + resulut;
tmp = ' сотен: ' + Math.trunc((num / 100) % 10);
resulut = tmp + resulut;

console.log('В числе - ' + num +' количество'+ resulut);