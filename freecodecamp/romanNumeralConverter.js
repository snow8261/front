function convert(num) {
    var numarr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //如果能用常量解决，就用常量解决
    var romanarr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var findInArray = function(num) {
        var index = numarr.indexOf(num);
        if (index >= 0) {
            return romanarr[index];
        } else {
            return -1;
        }
    };
    var convertPart = function(num, multiple) {
        var half=multiple*5;
        var romanNum="";
        var mod = num % multiple;
        var numWithoutMod = (num - mod);
        answer = findInArray(numWithoutMod);
        if (answer !== -1) {
            romanNum += answer;
        } else {
            if (numWithoutMod > half) {
                romanNum += romanarr[numarr.indexOf(half)];
                numWithoutMod = numWithoutMod - half;
            }
            for (var j = multiple; j <= numWithoutMod; j = j + multiple) {
                romanNum += romanarr[numarr.indexOf(multiple)];
            }
        }
        return romanNum;
    };
    var romanNum = "";
    var answer = findInArray(num);
    if (answer !== -1) {
        return answer;
    }
    var length=num.toString().length;// 1----1 2-----10 3-----100
    while(length>0){
        var power=Math.pow(10,length-1);
        var mod = num % power;
        romanNum+=convertPart(num,power);
        num = mod;
        length=length-1;
    }
    return romanNum;
}

console.assert(convert(1) === "I", "1 <> I");
console.assert(convert(2) === "II", convert(2) + " <> II");
console.assert(convert(3) === "III", convert(3) + " <> II");
console.assert(convert(4) === "IV", convert(4) + " <> IV");
console.assert(convert(5) === "V", convert(5) + " <> V");
console.assert(convert(6) === "VI", convert(6) + " <> VI");
console.assert(convert(7) === "VII", convert(7) + " <> VII");
console.assert(convert(8) === "VIII", convert(8) + " <> VIII");
console.assert(convert(9) === "IX", convert(9) + " <> IX");
console.assert(convert(10) === "X", convert(10) + " <> X");
console.assert(convert(11) === "XI", convert(11) + " <> XI");
console.assert(convert(12) === "XII", convert(12) + " <> XII");
console.assert(convert(14) === "XIV", convert(14) + " <> XIV");
console.assert(convert(15) === "XV", convert(15) + " <> XV");
console.assert(convert(16) === "XVI", convert(16) + " <> XVI");
console.assert(convert(19) === "XIX", convert(19) + " <> XIX");
console.assert(convert(20) === "XX", convert(20) + " <> XX");
console.assert(convert(21) === "XXI", convert(21) + " <> XXI");
console.assert(convert(24) === "XXIV", convert(24) + " <> XXIV");
console.assert(convert(41) === "XLI", convert(41) + " <> XLI");
console.assert(convert(44) === "XLIV", convert(44) + " <> XLIV");
console.assert(convert(54) === "LIV", convert(54) + " <> LIV");
console.assert(convert(64) === "LXIV", convert(64) + " <> LXIV");
console.assert(convert(99) === "XCIX", convert(99) + " <> XCIX");
console.assert(convert(101) === "CI", convert(101) + " <> CI");
console.assert(convert(110) === "CX", convert(110) + " <> CX");


/**
 * TDD确实可以从多个例子中推导出答案
 */