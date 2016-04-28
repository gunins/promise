define(
    [
        'utils/ajax',
        'modules/local'
    ], function (ajax,
                 local) {
        /*
        * Get translations with Promise
        * */

        var jsonString;

        function translation() {
            jsonString = jsonString || ajax.get('../json/translations.json');

            return jsonString.then(function (data) {
                return JSON.parse(data)[0][local.lv];
            });
        }

        return translation();
    });