// ==UserScript==
// @name         Grafana Sticky Variable Bar
// @namespace    https://grafana.au-infrastructure.com/
// @version      0.0.2
// @description  Makes the variable bar sticky in view and edit screens
// @author       Darshan Pandhi
// @match        https://grafana.au-infrastructure.com/*
// @match        https://grafana.common.au-tools.com/*
// @match        https://grafana.tools.tmc79.cn/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @run-at       document-idle
// @source       https://github.com/grafana/grafana/issues/11166#issuecomment-636150373
// @source       https://github.com/grafana/grafana/issues/11166#issuecomment-1736068036
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}


GM_addStyle(`
  .css-1978mzo-canvas-content {
    padding: 0 16px 16px 16px;
  }
`);


GM_addStyle(`
  section[aria-label="Dashboard submenu"] {
    position: fixed;
    left: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    padding: 16px 8px 8px 16px;
    -webkit-box-align: flex-start;
    align-items: flex-start;
    box-shadow: rgb(0, 0, 0) 0px 0.6px 1.5px, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.23) 0px 5px 10px;
    background: rgb(24, 27, 31);
  }
`);


GM_addStyle(`
  div.react-grid-layout {
    margin-top: 120px;
  }
`);


/*
Old script
==========


function fixedVariables() {
    var bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    var viewVarwrap = document.getElementsByClassName('submenu-controls');
//    var viewDashboardwrap = document.getElementsByClassName('dashboard-scroll'); // Broke after grafana upgrade
    viewVarwrap[0].style.position = "fixed";
    viewVarwrap[0].style.display = "flex";
    viewVarwrap[0].style.flexWrap = "wrap";
    viewVarwrap[0].style.zIndex = 100;
    viewVarwrap[0].style.top = "52px";
    viewVarwrap[0].style.width = "95%";
    viewVarwrap[0].style.backgroundColor = bgColor;
//    viewDashboardwrap[0].style.paddingTop = "50px";
    viewVarwrap[0].parentElement.parentElement.lastElementChild.style.paddingTop = viewVarwrap[0].clientHeight+"px";
}

waitForKeyElements(".submenu-controls", fixedVariables);
*/
