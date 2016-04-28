define(
    [
        'app/translationPromise',
        'app/translationsRequire',
        'modules/domReady'

    ], function(TranslationPromise,
                translationsRequire,
                domReady) {

        function showMagic() {

            //btns for test Promise
            var btnRedA = document.getElementById('btn1');
            var btnGreenA = document.getElementById('btn2');

            //btns for test RequireJS
            var btnRedB = document.getElementById('btn3');
            var btnGreenB = document.getElementById('btn4');

            /* Translations with Promises*/
            var data = {};
            TranslationPromise.then(function(data) {
                btnRedA.textContent = data.phrase1;
                btnGreenA.textContent = data.phrase2;
            });

            btnRedA.textContent = data.phrase1 || 'RED';
            btnGreenA.textContent = data.phrase2 || 'GREEN';

            /* Translations with RequireJS kind of promise async */
            translationsRequire(function(translation) {
                btnRedB.textContent = translation.phrase1 || 'RED';
                btnGreenB.textContent = translation.phrase2 || 'GREEN';
            })
        }

        domReady(function() {
            showMagic();
        });

    });