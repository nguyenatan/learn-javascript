var array = ['a', 'b', 'a', 'c', 'a', 'd'];

function occurrenceIndex(array, element) {
	var indices = [];
	
	var index = array.indexOf(element);
	while (index != -1) {
		indices.push(index);
		index = array.indexOf(element, index + 1);
	}
	
	return indices;
}

console.log(occurrenceIndex(array, 'a').reverse());
