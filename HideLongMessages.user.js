// ==UserScript==
// @name         Hide Long Messages
// @version      1.0
// @description  Hides previously sent messages from the message view in Helpdesk
// @author       Calvin Tomkins
// @match        https://app.helpdesk.com/*
// @icon         https://www.google.com/s2/favicons?domain=helpdesk.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/CalvT/HelpdeskScripts/main/HideLongMessages.js
// @updateURL    https://raw.githubusercontent.com/CalvT/HelpdeskScripts/main/HideLongMessages.js
// ==/UserScript==

(function() {
    'use strict';

    var extracssHLM = `
        div[style*="color:rgb(116,120,126);"] {
            height: 15px!important;
            background: red!important;
            overflow: hidden!important;
        }

        div[style*="color:rgb(116,120,126);"] td {
            background: red!important;
        }
    `;

    const addCSSHLM = s => document.head.appendChild(document.createElement("style")).innerHTML=s;
    addCSSHLM(extracssHLM);
})();