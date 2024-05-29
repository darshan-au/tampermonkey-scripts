// ==UserScript==
// @name         Close Windows
// @match        https://<domain>.webex.com/webappng/sites/ford/meeting/info/*
// @match        https://<domain>.webex.com/wbxmjs/joinservice/sites/ford/meeting/*
// @match        https://sase.k8s.au-infrastructure.com/web/msg/info/login_success
// @match        https://autonomic-ai.teleport.sh/web/msg/info/login_success
// @run-at       document-start
// ==/UserScript==

(function() {
    setTimeout(function(){
        window.close();
    }, 1000);
})();
