//noprotect
function smallestCommons(arr) {
  var notfound=true;
  arr.sort(function(a,b){
  	return a-b;
  });
  var big=arr[arr.length-1];
  while(notfound){
  	var test=true;
     for(var i=arr[0];i<=arr[arr.length-1];i++){
     	if(big%i!==0){
     		test=false;
     	}
     }
     if(test){
     		notfound=false;
     	}else{
     	big+=1;
     }
  }
  return big;
}


console.log(smallestCommons([1,5]));

console.log(smallestCommons([1,13]));