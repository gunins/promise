define(
    [
        'app/translationPromise',
        'app/translationsRequire'
    ], function (TranslationPromise,
                 translationsRequire) {

        console.log('%c main.js loaded translationsRequire: ','color:yellow;', translationsRequire);

        //btns for test Promise
        var btnRedA = document.getElementById('btn1');
        var btnGreenA = document.getElementById('btn2');

        //btns for test RequireJS
        var btnRedB = document.getElementById('btn3');
        var btnGreenB = document.getElementById('btn4');

        /* Translations with Promises*/
        var data = {};
        TranslationPromise.then(function (data) {
            console.log('main.js data: ', data);

            btnRedA.textContent = data.phrase1;
            btnGreenA.textContent = data.phrase2;
        });

        btnRedA.textContent = data.phrase1 || 'RED';
        btnGreenA.textContent = data.phrase2 || 'GREEN';
        
        /* Translations with RequireJS */
        btnRedB.textContent = translationsRequire.phrase1 || 'RED';
        btnGreenB.textContent = translationsRequire.phrase2 || 'GREEN';

        console.log('end phrase: ', data);

    });