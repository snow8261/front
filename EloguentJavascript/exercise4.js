var ex4=function(){
	var range=function(start,end,step){
		var ste=1;
		if(step!=undefined){
			ste=step;
		}
		var list=[];
		for(var i=start;i<=end;i=i+ste){
			list.push(i);
		}
		return list;
	};
	var sum=function(list){
		var count=0;
		for(var i=0;i<list.length;i++){
			count=count+list[i];
		}
		return count;
	}
	var reverseArray=function(array){
		var newArray=[];
		for(var i=array.length-1;i>=0;i--){
			newArray.push(array[i]);
		}
		return newArray;
	}
	var reverseArrayInPlace=function(array){
		var length=array.length/2;
		for(var i=0;i<length;i++){
			var temp=array[i];
			array[i]=array[array.length-1-i];
			array[array.length-1-i]=temp;
		}
		return array;
	}
	var prepend=function(pos,list){
		// var newlist={};
		// newlist['value']=pos;
		// newlist['rest']=list;
		// return newlist;
		return {value:pos,rest:list};
	}
	var arrayToList=function(array){
		var list={};
		reverseArrayInPlace(array);
		console.log(array);
		list['value']=array[0];
		list['rest']=null;
		for(var i=1;i<array.length;i++){
			list=prepend(array[i],list);
		}
		return list;
	}

	var listToArray=function(list){
		array=[];
		while(list['rest']!=null){
			array.push(list['value']);
			list=list['rest'];
		}
		array.push(list['value']);
		return array;
	}

	var nth=function(list,number){
		if(number==0){
			if(list!=null){
				return list['value'];
			}
			return undefined;
		}else{
			list=list['rest'];
			return nth(list,number-1);
		}
	}

	var jsobject=function(){
		var object={};
		object['a1']=1;
		var newobject={};

		newobject['dd']=object;
		object=newobject;
		return object;
	}

	var deepEqual=function(obj,obj1){
		if( (typeof obj)!='object' && (typeof obj1)!='object' ){
			return obj===obj1;
		}
		if(obj ==null&& obj1!=null){
			return false;
		}
		if(obj1 ==null&& obj!=null){
			return false;
		}
		for(var key in obj){
			if(!obj.hasOwnProperty(key)||!obj1.hasOwnProperty(key)){
				return false;
			}
			var value=obj[key];
			var value1=obj1[key];
	        var bol=deepEqual(value,value1);
	        if(!bol){
	        	return false;
	        }
		}
		return true;
	}
	console.log(deepEqual({1:1,2:null},{1:1,2:2}));
	//console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } },3));
	//console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
	//console.log(jsobject());
	//console.log(arrayToList([1,2,3]));
	//console.log(reverseArrayInPlace([1,2,3,"33"]));
	//console.log(reverseArray([1,2,3,"33"]));
	//console.log(sum(range(1,10,3)));
}
ex4();
