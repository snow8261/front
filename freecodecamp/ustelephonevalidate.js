
function telephoneCheck(str) {
  var re=/^(\d)?( )*(\()*(\d\d\d)(|\))*( )*(-)*(\d\d\d)( )*(-)*(\d\d\d\d)$/;
  var result=str.match(re);
  console.log(result);
  if(result===null)
  	{return false;}
  var countrycode=result[1];
  if(countrycode!==undefined&&parseInt(countrycode)!==1){
  	console.log(countrycode);
 	return false;
  }
  var left=result[3];
  var right=result[5];
  if(left!==undefined&&left.indexOf("(")>=0) {
  	if(right===undefined){
  		return false;
  	}
  	if(right!==undefined&&right.indexOf(")")<0) {
    	return false;
   }
  }
    if(right!==undefined&&right.indexOf(")")>=0) {
  	if(left===undefined){
  		return false;
  	}
  	if(left!==undefined&&left.indexOf("(")<0) {
    	return false;
   }
  }

  return true;
}



//console.log(telephoneCheck("555-5551-5555"));
console.log(telephoneCheck("(275)76227382"));
