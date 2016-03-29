/**
 * ClientVanilla
 *
 * Interface to Vanilla Forums API
 * https://blog.vanillaforums.com/api/
 */

'use strict';

import Client from './Client';

class ClientVanilla {
    constructor(domain) {
        super();
        this.url = 'http://' + domain + '/api/v1';
    }

    logIn(username, password, callback) {
        return Client.dummyLogIn(username, password, callback);
    }

    _fetch(url, process, responseCallback, errorCallback) {
        var request = new Request();
        request.url = this.url + url;

        var wrapper = new Client.Response(responseCallback, errorCallback);

        fetch(request)
            .then(Client.checkStatus)
            .then(resp => resp.json())
            .then(resp => process(resp))
            .then(resp => wrapper.responseCallback(resp))
            .catch(e => wrapper.errorCallback(e))
            .done();

        return wrapper;
    }

    _objectValues(input) {
        var output = new Array;
        for (var key in input) {
            output.push(input[key]);
        }
        return output;
    }

    /* Return list of all categories.
     *
     * Return type: [dataBlob, sectionIDs, rowIDs]
     *
     * dataBlob is a map: keys are group / category IDs; values are JSON objects
     * representing each group / category.
     *
     * sectionIDs is an array of group IDs.
     *
     * rowIDs is an array of arrays of category IDs.
     */
    getCategoryList(responseCallback, errorCallback) {
        console.log('ClientVanilla.getCategoryList');
        var process = function(response) {
            var inData = response.Categories;

            // Map from CategoryID to index into sectionIDs / rowIDs arrays.
            var map = {};

            var sectionIDs = [];
            var rowIDs = [];

            for (var id in inData) {
                var item = inData[id];
                var parentID = item.ParentCategoryID;

                if (parentID === -1) {
                    map[id] = sectionIDs.length;
                    sectionIDs.push(id);
                    rowIDs.push([]);
                }
            }

            for (var id in inData) {
                var item = inData[id];
                var parentID = item.ParentCategoryID;

                if (parentID !== -1) {
                    var idx = map[parentID];
                    rowIDs[idx].push(id);
                }
            }

            return {
                dataBlob: inData,
                sectionIDs: sectionIDs,
                rowIDs: rowIDs,
            };
        }

        return this._fetch(
                '/categories/list.json',
                (data => process(data)),
                responseCallback, errorCallback);
    }

    /* Returns a list of all discussions in a specified category.
     *
     */
    getCategoryDiscussionList(categoryID, pageIndex, itemIndex,
            responseCallback, errorCallback) {
        console.log('ClientVanilla.getCategoryDiscussionList'
            + ' categoryID '+ categoryID
            + ' pageIndex ' + pageIndex
            + ' itemIndex ' + itemIndex);
        var url = '/discussions/category.json?'
            + 'CategoryIdentifier=' + categoryID
            + '&'
            + 'Page=' + itemIndex;
        return this._fetch(url,
                (data => {
                    return {
                        pageIndex: pageIndex,
                        discussions: data.Discussions
                    };
                }), responseCallback, errorCallback);
    }
};

export { ClientVanilla as default };

