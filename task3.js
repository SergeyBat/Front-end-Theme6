/* Задача:  Две строки можно сделать одинаковыми, выполняя определенное количество операций перестановок символов над одной или обеими строками.

Возможны следующие операции:
	1. SwapEven: обмен символом с индексом с четным номером с символом в другом индексе с четным номером.
	2. SwapOdd: обмен символом с индексом с нечетным номером с символом в другом индексе с нечетным номером.

Например, строки "abcd", "cdab" можно сделать одинаковыми, переставив символы:
	- "c"(символ с нечетным индексом 1) / "a"(символ с нечетным индексом 3)
	- "d"(символ с четным индексом 2) / "b"(символ с четным индексом 4)
В другому примере строки "abcd", "bcda" нельзя сделать одинаковыми, т.к.например символ "a" в первом слове стоит на нечетном индексе(1), во втором слове на четном(4).
 */
let str1 = 'abcd';
let str2 = 'cdab';

function checkSwap(str1, str2) {
	let objStr1 = {};
	let objStr2 = {};
	arrIndex = str1Equalstr2(str1, str2);
	if (!arrIndex.equal) {
		return arrIndex.equal;
	}
	if (!arrIndex.value.includes(-1)) {
		objStr1 = strToIndexObj(str1);
		objStr2 = strToIndexObj(str2);
		return checkEvenNumber(objStr1, objStr2);
	}
	return false;
};
console.log(checkSwap(str1, str2));

function str1Equalstr2(str1, str2) {
	let arrIndex = [];
	if (str1.length != str2.length) {
		return { equal: false, value: null };
	}
	for (element of str1) {
		let reg = new RegExp(element, 'g');
		arrIndex.push(str2.search(reg));
		return { equal: true, value: arrIndex };
	}
}

function strToIndexObj(mas) {
	let ArrayIndex = [];
	let obj = {};
	for (element of [...new Set(mas)]) {
		const nanoIndexes = mas.split('')
			.map((e, i) => e === element ? i + 1 : -1)
			.filter(index => index !== -1);
		ArrayIndex.push([...new Set(nanoIndexes)])
		ArrayIndex.map(e => obj[element] = e)
	}
	return obj;
}

function checkEvenNumber(obj1, obj2) {
	let evenObj1 = [],
		oddObj1 = [],
		evenObj2 = [],
		oddObj2 = [];
	for (key in obj1) {
		obj1[key].forEach(e => {
			if (e % 2 == 0) {
				evenObj1.push(e);
			} else {
				oddObj1.push(e);
			}
		})
		obj2[key].forEach(e => {
			if (e % 2 == 0) {
				evenObj2.push(e);
			} else {
				oddObj2.push(e);
			}
		})
		if (evenObj1.length != evenObj2.length) {
			return false;
		} else {
			evenObj1 = [];
			oddObj1 = [];
			evenObj2 = [];
			oddObj2 = [];
		}
	}
	return true;
}