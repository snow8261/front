function myReplace(str, before, after) {
  var char=before.charAt(0);
  if(char.toUpperCase()==char){
  	after=after.charAt(0).toUpperCase()+after.slice(1);
  }
  var newstr=str.replace(before,after);
  return newstr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");