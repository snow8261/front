var taxDeduction=300; // global variable
var myTaxObject = {
taxDeduction: 400, // object property

doTaxes: function() {
	var thistaxd=this; 
	this.taxDeduction += 100;
	var mafiaSpecial= function(){
		console.log( "Will deduct " + thistaxd.taxDeduction);
	}
    mafiaSpecial(); // invoking as a function
}
}
myTaxObject.doTaxes(); //invoking method doTaxes