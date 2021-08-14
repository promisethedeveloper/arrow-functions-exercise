const h1 = document.createElement("h1");

h1.textContent =
	"Arrow functions are great additions to the javaScript language";

document.body.append(h1);

//Refactor the above code to use two arrow functions. Turn it into a one-liner.
// ES5 Map Callback
// function double(arr) {
// 	return arr.map(function (val) {
// 		return val * 2;
// 	});
// }

const double = (arr) => arr.map((val) => val * 2);

// function squareAndFindEvens(numbers) {
// 	var squares = numbers.map(function (num) {
// 		return num ** 2;
// 	});
// 	var evens = squares.filter(function (square) {
// 		return square % 2 === 0;
// 	});
// 	return evens;
// }

const squareAndFindEvens = (numbers) =>
	numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

console.log(squareAndFindEvens([2, 4, 55, 66, 88, 8, 9, 10]));
