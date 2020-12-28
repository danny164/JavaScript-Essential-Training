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

<<<<<<< HEAD
console.log("The result: ", theResult());// vi kieu laf function
=======
console.log("The result: ", theResult);

// https://developer.mozilla.org/vi/docs/Web/JavaScript/Closures
>>>>>>> 804aeea28474b3e3c9127caad1df3be72f9c8a7b
