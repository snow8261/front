function spinalCase(str) {
  //找以大写字母开头，没有特殊字符的单词  以大写开头，没有特俗字符
  var matches=str.split(/-| /g);
  var small=matches.map(function(str){
  	str=str[0].toUpperCase()+str.slice(1);
  	var result=str.match(/[A-Z][a-z]*/g);
    var res=result.map(function(obj){
       	return obj[0].toLowerCase()+obj.slice(1);
    });
  	return res.join("-");
  });
  return small.join("-");
}

console.log(spinalCase('this Is Spinal Tap'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('thisIsSpinalTap'));
