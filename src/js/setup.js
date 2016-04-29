requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'scripts'

});

require([
    'utils/domReady',
    'utils/locales'
], function(domReady, locales) {
    domReady(function() {
        var i18nDir = document.getElementById('i18nDir').value;
        var locale = document.getElementById('locale').value;
        require({
            paths:    {
                i18nDir: i18nDir + '/' + locales[locale]
            },
            packages: ['app']
        }, ['app']);
    });

});




