// ==UserScript==
// @name         view_class_test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://edu.sfls.cn:8000/el/studentAllowElective.action
// @grant        GM_xmlhttprequest
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    for(var i=100;i<101;i++){
        var baseurl="http://edu.sfls.cn:8000/el/toDetailElectiveArrangement.action?arrangement.arrangementId=102";
        GM_xmlhttpRequest({
            method: "GET",
            url:baseurl,
            onload: function(response) {
                console.log(response.responseText);
              //  GM_log(response.responseText);
            }
        });
        //console.log("for "+i);
    }
})();