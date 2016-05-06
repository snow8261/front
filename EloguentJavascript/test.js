function bouncer(arr) {
  var newarr= arr.filter(function(value){
    if(value===false||value===null||value===0||value===""||value===undefined||value===NaN){
    	return false;
    }
    return true;
  });
  return newarr;
}

function destroyer(arr) {
  var length=arguments.length;
  var target=arguments[0];
  var toflited=[];
  for(var i=1;i<length;i++){
    toflited.push(arguments[i]);
  }
  var result=target.filter(function(value){
    return toflited.indexOf(value)<0;
  });
  return result;
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function rot13(str) { // LBH QVQ VG!
  var arr=[];
  for(var i=0;i<str.length;i++){
    arr.push(str.charCodeAt(i));
  }
  var result="";
  for(var j=0;j<str.length;j++){
    var num=arr[j];
    if(num>=65&&num<=90){
      if(num+13>90){
        num-=13;
      }else{
        num+=13;
      }
    }
    result+=String.fromCharCode(num);
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log('ABC'.charCodeAt(0)) // returns 65
console.log('ZBC'.charCodeAt(0)) //90
console.log(String.fromCharCode(65, 66, 67));