//dynamic path
//var path = document.getElementById('websitePath').value;
var path = 'json';

define(
    [
        '/' + path + '/translationSimple.js',
        'modules/local'
    ], function (translations,
                 local) {
        var webLocal = document.getElementById('websiteLocal').value;
        return translations[local[webLocal]];
    }
);