define(['utils/ajax'], function (ajax) {

    var jsonString;
    var local = {
        en: 'en-gb',
        de: 'de-de'
    };

    function translation() {
        jsonString = jsonString || ajax.get('../json/translations.json');

        return jsonString.then(function (data) {
            return JSON.parse(data)[0][local.de];
        });
    }

    return translation();
});