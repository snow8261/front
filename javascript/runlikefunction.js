var taxDeduction=300; // global variable
var myTaxObject = {
taxDeduction: 400, // object property
    doTaxes: function() {
    this.taxDeduction += 100;
    var mafiaSpecial= function(){
        console.log( "Will deduct " + this.taxDeduction);
    }
    mafiaSpecial(); // invoking as a function
}
}
myTaxObject.doTaxes(); //invoking method doTaxes