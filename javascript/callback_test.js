var myTaxObject = {
taxDeduction: 400, // state-specific deduction
// this function takes an array and callback as parameters
applyDeduction: function(someArray, someCallBackFunction,callbackobj){
	for (var i = 0; i < someArray.length; i++){
// Invoke the callback
someCallBackFunction.call(this, someArray[i]);
}
}
}
// array
var preliminaryTaxes=[1000, 2000, 3000];
// tax handler function
var taxHandler=function(currentTax,callbackobj){
	console.log("Hello from callback. Your final tax is " +
		(currentTax - this.taxDeduction));
}
// invoking applyDeduction passing an array and callback
myTaxObject.applyDeduction(preliminaryTaxes, taxHandler,myTaxObject);