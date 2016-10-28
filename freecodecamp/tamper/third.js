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
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var baseurl="http://edu.sfls.cn:8000/el/toDetailElectiveArrangement.action?arrangement.arrangementId=";
    var httpRequest;
    for(var i=100;i<105;i++){
        setTimeout(function() {
          //  alert("Hello world!");
              makeRequest(baseurl+i,i);
        }, 1000); 
    }

    function makeRequest(url,i) {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.basecode=i;
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function alertContents() {
        // console.log(i);
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var wrappedObj = $("<code></code>").append($( httpRequest.responseText));
                var table = $(".right_top", wrappedObj)[0];
                var text=table.innerText;
                console.log(httpRequest.basecode+"--"+text);
                //console.log(table.innerText);
            } else {
                console.log('There was a problem with the request.');
            }
        }
    }
})();