function sumPrimes(num) {
  var arr=[];
  if(num==1){
  	return 0;
  }
  if(num==2){
  	return 3;
  }
  var isPri=function isPrime(n){
  	for(var i=2;i<=n/2;i++){
        if(n%i===0){
        	return false;
        }
  	}
  	return true;
  };
  var sum=0;
  for(var i=2;i<=num;i++){
  	if(isPri(i)){
  		sum+=i;
  	}
  }
  return sum;
}
console.log(sumPrimes(10));

console.log(sumPrimes(977));
