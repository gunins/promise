// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        main: 'app/main'
    }
});

requirejs(['main']);

// Start loading the main app file. Put all of
// your application logic in there.
/*require(['modules/domReady'], function (domReady) {
    domReady(function () {
        console.log('dom ready');
        //This function is called once the DOM is ready.
        //It will be safe to query the DOM and manipulate
        //DOM nodes in this function.
        requirejs(['main']);
    });
});*/



