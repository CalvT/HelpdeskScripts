// ==UserScript==
// @name         Print View
// @version      1.0
// @description  Creates a view that can be printed in Helpdesk
// @author       Calvin Tomkins
// @match        https://app.helpdesk.com/*
// @icon         https://www.google.com/s2/favicons?domain=helpdesk.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var extracssPV = `
        * {
            overflow: visible!important;
        }
    `;

    const addCSSPV = s => document.head.appendChild(document.createElement("style")).innerHTML=s;
    addCSSPV(extracssPV);
})();