requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'scripts',
   /* paths: {
        app: 'app',
        main: 'app/main'
    },*/ paths: {
        app: 'app2',
        main: 'app2/main'
    },
    /*'config': {
        'app/translationsRequire': {
            path: 'dynamicPath'
        }
    }*/
});

requirejs(['main']);



