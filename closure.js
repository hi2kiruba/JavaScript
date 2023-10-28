function outerfunction() {
	var outerVariable ="I am outside";
	
	function innerFunction() {
		console.log(outerVariable);
	}
	
	return innerFunction;
}

var closure = outerfunction();
closure();