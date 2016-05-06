function dropElements(arr, func) {
  var value=arr.shift();
  while(!func(value)){
     value=arr.shift();
  }
  if(func(value)){
   arr.unshift(value);
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
