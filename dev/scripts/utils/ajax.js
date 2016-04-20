define(
    [
        'utils/promise'
    ],
    function (Promise) {

        function ajax(url) {

            var P = Promise.Promise;

            // Return a new promise.
            return new P(function (resolve, reject) {
                var req;

                // Do the usual XHR stuff
                req = new XMLHttpRequest();
                if (window.XMLHttpRequest) {
                    // code for IE7+, Firefox, Chrome, Opera, Safari
                    req = new XMLHttpRequest();
                } else {
                    // code for IE6, IE5
                    req = new ActiveXObject("Microsoft.XMLHTTP");
                }

                req.open('GET', url);

                req.onload = function () {
                    // This is called even on 404 etc
                    // so check the status
                    if (req.status == 200) {
                        // Resolve the promise with the response text
                        resolve(req.response);
                    }
                    else {
                        // Otherwise reject with the status text
                        // which will hopefully be a meaningful error
                        reject(Error(req.statusText));
                    }
                };

                // Handle network errors
                req.onerror = function () {
                    reject(Error("Network Error"));
                };

                // Make the request
                req.send();
            });

        }

        return {get: ajax};
    }
);
