function unite(arr1, arr2, arr3) {
   var ar=[];
  for(var i=0;i<arguments.length;i++){
  		ar.push(arguments[i]);
  }
  var arr=ar.reduce(function(a,b){
  	for(var i=0;i<b.length;i++){
  	 if(a.indexOf(b[i])===-1){
         a.push(b[i]);
  	 }
    }
  	return a;
  });
  return arr;
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));
