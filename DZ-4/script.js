// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

console.log('Задание 1:');
printCycle();

function printCycle(params) {
	const newArr = [];
	for (let i = 0; i < 11; i++) {
		if (i === 0)
			console.log(i + ' - это ноль');
		else if (i % 2)
			console.log(i + ' - нечетное число');
		else
			console.log(i + ' - четное число');
	}
}

console.log("");
// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
console.log('Задание 2:');
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(`Исходный массив [${arr}]`);
const arr1 = arr.splice(3, 2);
console.log(`Результирующий массив [${arr}]`);

console.log("");
// Задание 3
// Используя Math.random() вам необходимо генерировать цифры
//  от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
console.log('Задание 3:');
const five = rundomFive();
console.log('Массив чисел: ' + five);
console.log(sumFive(five));
console.log(minNum(five));
console.log(findThree(five));


function rundomFive() {
	let arr = [];
	for (let i = 0; i < 5; i++)
		arr.push(Math.floor(Math.random() * 9.9999));
	return arr;
};

function minNum(num = []) {
	let min = num[0];
	for (let i = 1; i < num.length; i++)
		if (min >= num[i])
			min = num[i];
	return 'Минимальное число: ' + min;
}

function sumFive(num = []) {
	let sum = 0;
	for (let i = 0; i < num.length; i++)
		sum += num[i];
	return 'Cумма равна: ' + sum;
}

function findThree(num = []) {
	for (let i = 0; i < num.length; i++)
		if (num[i] === 3)
			return 'Число 3 ПРИсутствует в массиве.';
	return 'Число 3 ОТсутствует в массиве.';
}