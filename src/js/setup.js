requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        main: 'app/main'
    },
    'config': {
        'app/translationsRequire': {
            path: 'dynamicPath'
        }
    }
});

requirejs(['main']);



