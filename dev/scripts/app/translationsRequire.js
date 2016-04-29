define(['require', 'modules/local'], function(localRequire, local) {
    return function(resolve) {
        var localPath = document.getElementById('websitePath').value;
        var webLocal = document.getElementById('websiteLocal').value;
        var locale = local[webLocal];
        localRequire([localPath + '/translationSimple'], function(translations) {
            resolve(translations[locale]);
        })
    }

})