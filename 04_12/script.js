function doSomeMath() {
	var a = 5;
	var b = 4;

	function multiply(){
		var result =a*b;
		return result;

	}
	function divide(){
		var result =a/b;
		return result;

	}
	return divide;
	// var sum = a + b;

	// return sum;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());// vi kieu laf function
