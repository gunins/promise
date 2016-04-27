requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        main: 'app/main'
    }
});

requirejs(['main']);



