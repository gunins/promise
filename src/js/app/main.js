define([
    'i18nDir/translation'
], function(translation) {

    //btns for test RequireJS
    var btnRedB = document.getElementById('btn3');
    var btnGreenB = document.getElementById('btn4');

    /* Translations with RequireJS */
    var translation = translation || {};
    btnRedB.textContent = translation.phrase1 || 'RED';
    btnGreenB.textContent = translation.phrase2 || 'GREEN';


});