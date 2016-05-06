function pair(str) {
  var match={G:'C',C:'G',A:'T',T:'A'};
  var arr=[];
  for (var i = 0; i <str.length; i++) {
  	var char=str.charAt(i);
    arr.push([char,match[char]]);
  }
  return arr;
}

console.log(pair("GCG"));