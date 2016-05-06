function where(collection, source) {
  var arr = [];
  arr=collection.filter(function(obj){
    var keys=Object.keys(source);
    for(var i=0;i<keys.length;i++){
      var key=keys[i];
      if(!obj.hasOwnProperty(key)){
      	return false;
      }
      if(obj[key]!==source[key]){
        return false;
      }
    }
    return true;
  });
  return arr;
}

console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
