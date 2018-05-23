var array = ['a', 'b', 'c'];

function updateArray(array, element) {
	if (!~array.indexOf(element)) {
		array.push(element);
		console.log(array);
		return;
	}
	
	console.log(array);
}

updateArray(array, 'd'); // ["a", "b", "c", "d"]
