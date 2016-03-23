/**
 * ApiUtils
 *
 * From http://www.yoniweisbrod.com/network-requests-in-react-native-using-fetch/
 */

'use strict';

var ApiUtils = {
    checkStatus: function(response) {
        // https://github.com/github/fetch
        if (response.status >= 200 && response.status < 300) {
            let error = new Error('TESTING');
            error.response = response;
            throw error;

            return response;
        } else {
            console.log('ApiUtils.checkStatus error ' + response.statusText);
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};

export { ApiUtils as default };

