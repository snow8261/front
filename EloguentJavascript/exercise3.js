var ex3=function(){
	var min=function(a,b){
		if(a<b){
			return a;
		}else {
			return b;
		}
	};
	var isEven=function(number){
		if(number<0){
			return isEven(-1*number);
		}
        if(number==0){
        	return true;
        }else if(number==1){
        	return false;
        }else{
        	return isEven(number-2);
        }
	};
	var countBs=function(str){
		var count=0;
		for(var i=0;i<str.length;i++){
			if(str.charAt(i)==='B'){
				count++;
			}
		}
		return count;
	}
	var countBss=function(str) {
		return countChar(str,'B');
	}
	var countChar=function(str,charat){
		var count=0;
		for(var i=0;i<str.length;i++){
			if(str.charAt(i)===charat){
				count++;
			}
		}
		return count;
	}
	console.log(countBss("Bass"));
	//console.log(isEven(-1));
	//console.log(min(3,5));
}
ex3();