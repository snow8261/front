function steamrollArray(arr) {
  var isFlatten=function(temparr) {
  	console.log("begin to check-----"+temparr);
  	for(var i=0;i<temparr.length;i++){
  		if(Array.isArray(temparr[i])){
  				console.log("array dected "+temparr);
  			return false;
  		}
    }
    return true;
  };
  var flatten=function(item){
       var newa=[];
       console.log("begin to flatten++++++ "+item);
       for(var i=0;i<item.length;i++){
       	console.log("show i="+i+" "+item[i]);
        console.log(item[i]);
       	if(!isFlatten(item[i])){
             console.log("begint to flatten item-"+i+" "+item[i]);
             var value=flatten(item[i]);
              console.log(value);
             console.log("log value ++++++++ "+value+" newa -------- "+newa);
       		   newa=newa.concat(value);// concat did not change the array itself,create a new array instead 
         console.log("log value ++++++++ "+value+" newa -------- "+newa);
       	}else{
        console.log("add flatt-"+item[i]);
        console.log(item[i]);
       	newa=newa.concat(item[i]);// not push but concat, because [4] is flatten,so should concat it
         console.log("log newa -------------  "+newa);
       }
        console.log("newa is "+newa);
     }
     return newa;
  };

  if(!isFlatten(arr)){
  	arr=flatten(arr);
  }
  return arr;
}
console.log(steamrollArray([[[4]]]));
//console.log("-----------------------"+steamrollArray([1, [2], [3,[4]]]));
//
//