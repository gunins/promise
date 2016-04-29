define([
    'require',
    'modules/local',
    'modules/domReady'
], function(localRequire, local, domReady) {

    function showMagic() {
        var localPath = document.getElementById('websitePath').value;
        var webLocal = document.getElementById('websiteLocal').value;
        var locale = local[webLocal];
        //LocalRequire for proper path resolving.
        require.config({
            paths: {
                local: localPath
            }
        });
        require([
            'local/translationSimple', // can be local+'/translationSimple' and no need configuration paths
        ], function(translationsRequire) {

            //btns for test RequireJS
            var btnRedB = document.getElementById('btn3');
            var btnGreenB = document.getElementById('btn4');

            /* Translations with RequireJS */
            var translation = translationsRequire[locale] || {};
            btnRedB.textContent = translation.phrase1 || 'RED';
            btnGreenB.textContent = translation.phrase2 || 'GREEN';

        });
    }

    domReady(function() {
        showMagic();
    });
});