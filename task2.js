/* Решить задачу
Написать функцию, которая будет принимать два аргумента: текущее положение Слона и любую другую точку на шахматной доске.Функция должна проверить, возможно ли перемещение слона из одной клетки в другую за один ход и вернуть булевое значение.
	function(“a3”, “b3”) { … };
 */


function check(pos1, pos2){
	let coordinate1=findeCoordinate(pos1);
	let coordinate2 = findeCoordinate(pos2);
	console.log(coordinate1, coordinate2);
	if (coordinate1[0] != coordinate2[0] && coordinate1[1] != coordinate2[1]){
		if (Math.abs(coordinate1[0] - coordinate2[0]) == Math.abs(coordinate1[1] - coordinate2[1])){
			return true;
		}
	}
	return false;
};

function findeCoordinate(element){
	let coordinate=[];
	let sheese = [['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
				  ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
				  ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
				  ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
				  ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
				  ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
				  ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
				  ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']];
	for (let y = 0; y < sheese.length; y++) {
		x = sheese[y].findIndex(e => e == element)
		if (x != (-1)) {
			coordinate.push(x);
			coordinate.push(y);
			break
		}
	}
	return coordinate;
};

console.log(check('a1', 'b3'));