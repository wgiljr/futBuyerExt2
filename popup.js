'use strict';

function injectTheScript() {
    alert('ok');
}
document.getElementById('btnBuyNow').addEventListener('click', injectTheScript);