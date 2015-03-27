var ex2=function(){
	var looptriangle=function() {
		for(var number=1;number<8;number++) 
		{
			var str="";
			while(str.length<number){
				str=str+"#";
			}
			console.log(str);
		}
	}
	var loopTriangleAnswer=function() {
		for(var str="#";str.length<8;str+="#")
			console.log(str);
	}
	var fizzBuzz=function(){
		for(var i=1;i<=100;i++){
			if(i%3==0&&i%5==0){
				console.log("fizzBuzz");
			}else
			if(i%3==0){
				console.log("Fizz");
			}else if(i%5==0){
				console.log("Buzz");
			}
			else{
				console.log(i);
			}
		}
	};
	var chessboard=function(size){
		var space=" ";
		var charactor="#";
		var newline="\n";
		var result="";
		for(var x=0;x<size;x++){
			for(var y=0;y<size;y++){
				if((x+y)%2==0){
					result+=space;
				}else{
					result+=charactor;
				}
			}
			result+=newline;
		}
		return result;
	}
	console.log(chessboard(8));
	//fizzBuzz();
	//loopTriangleAnswer();
};
ex2();