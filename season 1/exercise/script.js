let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function pushNewElement(newElement) {
	newArr = [newElement, ...myArray];
	myArray = newArr;
	console.log(myArray);
}
function pullElement() {
	myArray.length = myArray.length - 1;
	console.log(myArray);
}
