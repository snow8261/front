function UiObject() {
     var childCount = 0; // 函数内部变量
     function getChildCount(){
         childCount = 6;
         return childCount;
     }
     return getChildCount;
 }
 var funcReturnFObject = UiObject();  // 调用函数，返回 getChildCount 函数，返回值是一个闭包
 console.log(funcReturnFObject());   