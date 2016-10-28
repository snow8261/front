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
    var baseurl="http://edu.sfls.cn:8000/el/toDetailElectiveArrangement.action?arrangement.arrangementId=102";
    var httpRequest;
    for(var i=100;i<101;i++){
        makeRequest(baseurl);
    }

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                 var wrappedObj = $("<code></code>").append($( httpRequest.responseText));
                 var table = $(".table", wrappedObj);
               // var doms = $.parseHTML( httpRequest.responseText );
                //var dataObject=$(httpRequest.responseText);
              //  console.log(httpRequest.responseText);
              // var fr= $(".td_r_bg",table[0])[0].nextSibling;
                 var fr= $(".td_r_bg",table[0])[0];
                console.log(fr);
               // console.log(doms[0]);
            } else {
                console.log('There was a problem with the request.');
            }
        }
    }
})();