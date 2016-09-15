
// create empty object 
minheaper = {}; 

// define insert function for min binary heap
function minheap_insert(heap, new_element) {
	heap.unshift(new_element);
	return minheap_maintain(heap);
    // STENCIL: implement your min binary heap insert operation
}

function minheap_maintain(heap) {
	var i = 1, size = heap.length;
	while (2*i <= size) {
		var l = 2 * i, r = 2 * i + 1, largest;
		if (heap[i - 1] > heap[l - 1]) {
			largest = i;
		} else {
			largest = l;
		}
		if (r <= size && heap[r - 1] > heap[largest - 1]) {
			largest = r;
		}
		if (largest == i) break;
		else {
			var tmp = heap[largest - 1];
			heap[largest - 1] = heap[i - 1];
			heap[i - 1] = tmp;
			i = largest;
		}
	}
	return heap;
}

// assign insert function within minheaper object
minheaper.insert = minheap_insert;
/* Note: because the minheap_insert function is an object, we can assign 
      a reference to the function within the minheap object, which can be called
      as minheap.insert
*/

// define extract function for min binary heap
function minheap_extract(heap) {
	var size = heap.length;
	heap[0] = heap[size - 1];
	heap.splice(size - 1, 1);
	return minheap_maintain(heap);
    // STENCIL: implement your min binary heap extract operation
}

// assign extract function within minheaper object

    // STENCIL: ensure extract method is within minheaper object






