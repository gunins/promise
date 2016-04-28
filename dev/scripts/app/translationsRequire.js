//dynamic path
//var path = document.getElementById('websitePath').value;
var path = '';

console.log('1 path: ', path);
require(['module'], function (module) {
    path = document.getElementById('websitePath').value;
    console.log('2 path: ', path);
    module.config().path = path;
});

define(
    [
        '/' + path + '/translationSimple.js',
        'modules/local'
    ],

    function (translations,
              local) {

        console.log('module path: ', path);
        /*
         * Get translations with RequireJS
         * */
        var webLocal = document.getElementById('websiteLocal').value;
        return translations[local[webLocal]];
    }
);