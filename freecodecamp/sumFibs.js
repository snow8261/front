function sumFibs(num) {
	var arr=[1,1];
    if(num<=2){
    	return num;
    }
    var item =0;
    while(item<num){
    	item=arr[arr.length-2]+arr[arr.length-1];
    	if(item<=num){
    	arr.push(item);
        }
    }
    var sum=arr.reduce(function(a,b){
         if(b%2 !==0){
         	return a+b;
         }else{
            return a;
         }

    });
    return sum;
}

sumFibs(4);
console.log(sumFibs(1000));