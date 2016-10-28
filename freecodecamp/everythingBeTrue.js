function truthCheck(collection, pre) {
   var check=true;
   collection.forEach(function(user){
   	    if(!user.hasOwnProperty(pre))
            {check=false;
            }
   	    else if(user[pre]===false||user[pre]===0||user[pre]===""||user[pre]===null||user[pre]===undefined||Number.isNaN(user[pre])){
   	    	check=false;
   	    }

   });
   return check;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));