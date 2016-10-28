function addTogether() {
  if(arguments.length==2){
  	if(Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){
  		return arguments[0]+arguments[1];
  	}else{
  		return undefined;
  	}
  }
  if(Number.isInteger(arguments[0])){
  	var x=arguments[0];
  	return function(toAdd){
  		if(!Number.isInteger(toAdd))
  			return undefined;
  		return x+toAdd;
  	};
  }
  return undefined;
}

//console.log(addTogether(2,3));
console.log(addTogether(2)([3]));