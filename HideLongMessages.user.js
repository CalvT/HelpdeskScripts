// ==UserScript==
// @name         Hide Long Messages
// @version      1.2
// @description  Hides previously sent messages from the message view in Helpdesk
// @author       Calvin Tomkins
// @match        https://app.helpdesk.com/*
// @icon         https://www.google.com/s2/favicons?domain=helpdesk.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/CalvT/HelpdeskScripts/main/HideLongMessages.user.js
// @updateURL    https://raw.githubusercontent.com/CalvT/HelpdeskScripts/main/HideLongMessages.user.js
// ==/UserScript==

(function() {
    'use strict';

    var extracssHLM = `
        div.fs-mask > div > div:nth-child(2) {
            max-height: 300px!important;
            overflow-y: scroll!important;
            overflow-x: hidden!important;
        }
    `;

    const addCSSHLM = s => document.head.appendChild(document.createElement("style")).innerHTML=s;
    addCSSHLM(extracssHLM);
})();
