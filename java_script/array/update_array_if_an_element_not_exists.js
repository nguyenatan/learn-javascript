var array = ['a', 'b', 'c'];

function updateArray(array, element) {
	if (!~array.indexOf(element))
		array.push(element);
	
	return array;
}

console.log(updateArray(array, 'd')); // ["a", "b", "c", "d"]
