/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  	let arr = preferences;
	let count = 0;

	for(let i = 0; i < arr.length; i++) {
	    var next = arr[i];
	    var a = arr[next - 1];
	    var b = arr[a - 1];
	    var c = arr[b - 1];
	       
	    if(next != a && a != b && c == next) {
	        count++;
	        arr[next - 1] = -1;
	        arr[a - 1] = -1;
	        arr[b - 1] = -1;
    	}
	}
	return count;
};
