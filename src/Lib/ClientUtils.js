/**
 * ClientUtils
 *
 * From http://www.yoniweisbrod.com/network-requests-in-react-native-using-fetch/
 */

'use strict';

/*! Check status of an HTTP response.
 */
var checkStatus = function(response) {
    // https://github.com/github/fetch
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        console.log('ClientUtils.checkStatus error ' + response.statusText);
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

/*! Wrapper around fetch.Response which facilitates cancellation of requests.
 */
class Response {
    constructor(responseCallback, errorCallback) {
        this.active = true;
        this._responseCallback = responseCallback;
        this._errorCallback = errorCallback;
    }

    cancel() {
        console.log('ClientUtils.Response.cancel');
        this.active = false;
    }

    responseCallback(data) {
        if (this.active) {
            this.active = false;
            this._responseCallback(data);
        }
    }

    errorCallback(data) {
        if (this.active) {
            this.active = false;
            this._errorCallback(data);
        }
    }
};

/*! Simulate a network request.
 *
 *  Waits for a predetermined time, then:
 *      if error is not null, calls errorCallback(error)
 *      else calls responseCallback(response)
 *
 *  Returns a Response object.
 */
var dummyRequest = function(result, responseCallback, error, errorCallback) {
    const RESPONSE_DELAY = 1000;

    var wrapper = new Response(responseCallback, errorCallback);

    setTimeout(
        () => {
            if (error) {
                wrapper.errorCallback(error);
            } else {
                wrapper.responseCallback(result);
            }
        },
        RESPONSE_DELAY
    );

    return wrapper;
}

var dummyLogIn = function(username, password, callback) {
    console.log('ClientUtils.dummyLogIn'
        + ' username ' + username
        + ' password ' + password);

    const USERNAME = 'test';
    const PASSWORD = 'abc';

    var result = (username == USERNAME && password == PASSWORD);

    return dummyRequest(result, callback, null, null);
}

/*! Make a GET request.
 *
 *  Returns a Response object.
 */
var getRequest = function(url, process, responseCallback, errorCallback) {
    var request = new Request();
    request.url = url;

    var wrapper = new Response(responseCallback, errorCallback);

    fetch(request)
        .then(checkStatus)
        .then(resp => resp.json())
        .then(resp => process(resp))
        .then(resp => wrapper.responseCallback(resp))
        .catch(e => wrapper.errorCallback(e))
        .done();

    return wrapper;
}

/*! Process the JSON object returned by a getCategoryList request.
 *
 *  Returns a single section containing all categories.
 */
var categoryListToFlat = function(response) {
    var inData = response.Categories;

    var rowIDs = [[]];
    for (var entry in inData) {
        rowIDs[0].push(entry);
    }

    var sectionIDs = ['all'];
    inData['all'] = {
        'Name': 'All categories',
    };

    /*
    for (var id in sectionIDs) {
        console.log('ClientUtils.categoryListToFlat section'
            + ' ' + id + ' : ' + rowIDs[id]);
    }
    */

    return {
        dataBlob: inData,
        sectionIDs: sectionIDs,
        rowIDs: rowIDs,
    };
}

/*! Process the JSON object returned by a getCategoryList request.
 *
 *  Returns a section per top-level category.
 */
var categoryListToSections = function(response) {
    const PARENT_ID_NULL = -1;

    var inData = response.Categories;

    // Map from CategoryID to index into sectionIDs / rowIDs arrays.
    var map = {};

    var sectionIDs = [];
    var rowIDs = [];

    for (var id in inData) {
        var item = inData[id];
        var parentID = item.ParentCategoryID;

        if (parentID === PARENT_ID_NULL) {
            map[id] = sectionIDs.length;
            sectionIDs.push(id);
            rowIDs.push([]);
        }
    }

    for (var id in inData) {
        var item = inData[id];
        var parentID = item.ParentCategoryID;

        if (parentID !== PARENT_ID_NULL) {
            var idx = map[parentID];
            rowIDs[idx].push(id);
        }
    }

    /*
    for (var id in sectionIDs) {
        console.log('ClientUtils.categoryListToSections section'
            + ' ' + id + ' : ' + rowIDs[id]);
    }
    */

    return {
        dataBlob: inData,
        sectionIDs: sectionIDs,
        rowIDs: rowIDs,
    };
}

module.exports = {
    categoryListToFlat: categoryListToFlat,
    categoryListToSections: categoryListToSections,
    checkStatus: checkStatus,
    dummyLogIn: dummyLogIn,
    dummyRequest: dummyRequest,
    getRequest: getRequest,
    Response: Response,
};
