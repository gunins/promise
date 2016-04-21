define(['utils/ajax'], function (ajax) {

    var jsonString;
    var local = {
        en: 'en-gb',
        lv: 'lv-lv',
        de: 'de-de'
    };

    function translation() {
        jsonString = jsonString || ajax.get('../json/translations.json');

        return jsonString.then(function (data) {
            console.log('returned json: ', JSON.parse(data)[0][local.lv]);
            return JSON.parse(data)[0][local.lv];
        });
    }

    return translation();
});