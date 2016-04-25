define(
    [
        'utils/ajax',
        'modules/local'
    ], function (ajax,
                 local) {

        var jsonString;

        function translation() {
            jsonString = jsonString || ajax.get('../json/translations.json');

            return jsonString.then(function (data) {
                console.log('returned json: ', JSON.parse(data)[0][local.lv]);
                return JSON.parse(data)[0][local.lv];
            });
        }

        return translation();
    });