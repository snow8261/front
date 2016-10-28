function sym(args) {
  var arr= Array.from(arguments);// convert args to real arr  use arguments not args
 // var arr = (args.length === 1 ? [args[0]] : Array.apply(null, args));
  //var arr=[];
  //console.log(arguments);
  //  console.log(args[0]);
  //  console.log(args[1]);
  //  console.log(args.length);
  // for(var j=0;j<args.length;j++){
  // 	  console.log(args[j]);
  // 	arr.push(args[j]);
  // }
//  console.log(arr);
  var sym=arr.reduce(function(pre,curr){
  	var trim=function(arr){
  	    var newarr=[];
  	    for(var i=0;i<arr.length;i++){
  	    	if(newarr.indexOf(arr[i])<0){
  	    		newarr.push(arr[i]);
  	    	}
  	    }
  	    return newarr;
  	};
  	var trimpre=trim(pre);
  	var trimcurr=trim(curr);
    var precurr=trimpre.concat(trimcurr);
    var newarr=[];
    for(var i=0;i<precurr.length;i++){
    	var value=precurr[i];
    	if(precurr.indexOf(value)===precurr.lastIndexOf(value)){
    		newarr.push(value);
    	}
    }
  	return newarr;
  });
  return sym;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));