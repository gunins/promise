var path = 'json';

define(
    [
        '/' + path + '/translationSimple.js',
        'modules/local'
    ], function (
                translations,
                 local) {

        return translations[local.lv];
    });