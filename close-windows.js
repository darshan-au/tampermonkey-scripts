// ==UserScript==
// @name         Close Windows
// @match        https://ford.webex.com/webappng/sites/ford/meeting/info/*
// @match        https://ford.webex.com/wbxmjs/joinservice/sites/ford/meeting/*
// @run-at       document-start
// ==/UserScript==

(function() {
    setTimeout(function(){
        window.close();
    }, 1000);
})();
