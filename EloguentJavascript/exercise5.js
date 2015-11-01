var ex5=function(){
	var flatten=function(arrays){
	return arrays.reduce(function(a,sum){
		return a.concat(sum);
	});
    }
    require("./05_higher_order/code/load")("code/ancestry.js", 
    	"code/chapter/05_higher_order.js", "code/intro.js");
    var diff=function(array){
       return array.map(function(obj){
       		var mother = byName[obj['mother']];
       		if(mother){
       			return obj['born']-mother['born'];
       		}else{
       			return 0;
       		}
       });
    }
    function nullfilter(element){
    	return element >0; 
    	};
    var nullfilter1=function(element){
        return element >0; 
    };
    var difference=ancestry.filter(function(person){
    	return byName[person.mother]!=null
    }).map(function(person){
    	return person.born-byName[person.mother].born;
    });
    //console.log(average(difference));
   // console.log(average(diff(ancestry).filter(nullfilter1)));
  //  console.log(average(diff(ancestry).filter(nullfilter)));
    console.log(average(ancestry.map(function(obj){
      	var mother = byName[obj['mother']];
       		if(mother){
       			return obj['born']-mother['born'];
       		}else{
       			return 0;
       		}
   }).filter(function(element){
   	   return element>0;
   })));
  // console.log(flatten([[11,22],[111,222,333],[1,'a','ggg']]));
   console.log([[11,22],[111,222,333],[1,'a','ggg']].reduce(function(a,b){
	return a.concat(b);
   }));
   var agePercentury={};
   ancestry.forEach(function(person){
   	  var century=Math.ceil(person.died/100);
   	  var age=person.died-person.born;
   	  if(century in agePercentury){
   	  	agePercentury[century].push(age);
   	  }else{
   	  	agePercentury[century]=[];
   	  	agePercentury[century].push(age);
   	  }
   });
   
    var keys=Object.keys(agePercentury);   
    keys.forEach(function(key){
    	agePercentury[key]=average(agePercentury[key]);
    });

    console.log(agePercentury);
    var groupBy=function(arr,f){
    	var obj={};
    	arr.forEach(function(element){
    		var group=f(element);
    		if(group in obj){
    			obj[group].push(element);
    		}else{
    			obj[group]=[element];
    		}
    	});
    	return obj;
    }
    var groupbycentury=groupBy(ancestry,function(person){
    	return Math.ceil(person.died/100);
    });
    for(var century in groupbycentury){
    	var ages= groupbycentury[century].map(function(person){
    		return person.died-person.born;
    	});
    	console.log(century+":"+average(ages));
    }
    // console.log(groupBy(ancestry,function(person){
    // 	return Math.ceil(person.died/100);
    // }));
    function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}
	var every=function(arr,f){
		var bool=true;

		arr.forEach(function(element){
			   console.log("sss:"+f(element));
			if(!f(element)){
				bool= false;
			}
		});
		return bool;
	}
    var some=function(arr,f){
    	var bool=false;
    	arr.forEach(function(element){
    		if(f(element)){
    			bool=true;
    		}
    	});
    	return bool;
    }

    console.log(isNaN(4));
    console.log(every([3,4],isNaN));
   // agePercentury.forEach(function(century){
   // 		console.log(century.reduce(function(sum,age){
   // 			return sum+age;
   // 		})/century.length);
   // });
}
ex5();