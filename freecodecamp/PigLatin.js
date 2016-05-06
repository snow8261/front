function translate(str) {
  var vowels="aeoiu";
  if(vowels.indexOf(str.charAt(0))>=0){
   return str+"way";
  }
  for(var i=0;i<str.length;i++){
  	if(vowels.indexOf(str.charAt(i))>=0){
  		return str.substr(i)+str.slice(0,i)+"ay";
   }
  }
  return str;
}

console.log(translate("consonant"));