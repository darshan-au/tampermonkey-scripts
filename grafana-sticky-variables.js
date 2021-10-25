// ==UserScript==
// @name         Grafana Sticky Variable Bar
// @namespace    https://grafana.au-infrastructure.com/
// @version      0.0.1
// @description  Makes the variable bar sticky in view and edit screens
// @author       Darshan Pandhi
// @match        https://grafana.au-infrastructure.com/*
// @match        https://grafana.common.au-tools.com/*
// @match        https://grafana.tools.tmc79.cn/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @run-at       document-idle
// @source       https://github.com/grafana/grafana/issues/11166#issuecomment-636150373
// ==/UserScript==


function fixedVariables() {
    var viewVarwrap = document.getElementsByClassName('submenu-controls');
    var viewDashboardwrap = document.getElementsByClassName('dashboard-scroll');
    viewVarwrap[0].style.position = "fixed";
    viewVarwrap[0].style.zIndex = 100;
    viewVarwrap[0].style.top = "52px";
    viewDashboardwrap[0].style.paddingTop = "50px";
}

waitForKeyElements(".submenu-controls", fixedVariables);
