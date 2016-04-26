//dynamic path
var path = document.getElementById('websitePath').value;

define(
    [
        '/' + path + '/translationSimple.js',
        'modules/local'
    ], function (translations,
                 local) {

        return translations[local.lv];
    }
);