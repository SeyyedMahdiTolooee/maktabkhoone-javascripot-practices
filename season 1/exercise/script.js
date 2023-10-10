let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(myArray);
function pushNewElement(inputArr, newElement) {
	console.log(`the item that you want to add to the array is: ${newElement} and it will be added to the array!`);
	let tempArr = [];
	tempArr[0] = newElement;
	j = 0;
	for (let i = 0; i < tempArr.length; i++) {
		if (j < inputArr.length) tempArr[i + 1] = inputArr[i];
		j++;
		inputArr[i] = tempArr[i];
	}
	console.log(`this is the array after adding ${newElement} to it:
	${inputArr}`);
}
function pullElement(inputArr) {
	console.log(`the last item in the array is: ${inputArr[inputArr.length - 1]} and it will be deleted!`);
	myArray.length = myArray.length - 1;
	console.log(`this the the array after deleting the last element: ${inputArr} `);
}
pullElement(myArray);
