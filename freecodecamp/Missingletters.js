function fearNotLetter(str) {
  var num=str.charCodeAt(0); 
  for(var i=1;i<str.length;i++){
      var ch=String.fromCharCode(num+i);
      if (ch!==str.charAt(i)) {
      	return ch;
      }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
