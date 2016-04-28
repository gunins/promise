define(['require','modules/local'], function(localRequire,local) {
    return  function(resolve) {
            var local = document.getElementById('websiteLocal').value;
            var webLocal = document.getElementById('websiteLocal').value;
            var locale = local[webLocal];
            localRequire({
                paths: {
                    local: local
                }
            }, ['local/translationSimple'], function(translations) {
                resolve(translations[locale]);
            }) 
        }

})