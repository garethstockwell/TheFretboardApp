/**
 * ClientMock
 *
 * Interface to Mock Forums API
 * https://blog.Mockforums.com/api/
 */

'use strict';

var Client = require('./Client');

const RESPONSE_DELAY = 1000;

const DISCUSSIONS_PER_PAGE = 20;

class ClientMock {
    _request(result, responseCallback, error, errorCallback) {
        var wrapper = new Client.Response(responseCallback, errorCallback);

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

    /* Log in
     *
     */
    logIn(username, password, callback) {
        console.log('ClientMock.logIn'
            + ' username ' + username
            + ' password ' + password);

        var result = (username == 'test' && password == 'abc');

        return this._request(result, callback, null, null);
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
    getCategoryListSectioned(responseCallback, errorCallback) {
        console.log('ClientMock.getCategoryListSectioned');

        var result = {
            dataBlob: {
                "1": {
                    CategoryID: 1,
                    Name: 'Test category 1',
                    CountAllDiscussions: 200,
                },
                "2": {
                    CategoryID: 2,
                    Name: 'Test category 2',
                    CountAllDiscussions: 200,
                },
                "3": {
                    CategoryID: 3,
                    Name: 'Test category 3',
                    CountAllDiscussions: 200,
                },
            },
            sectionIDs: [
                '1'
            ],
            rowIDs: [
                [ '2', '3' ]
            ],
        };

        return this._request(result, responseCallback, null, null);
    }

    /* Returns a list of all discussions.
     *
     * TODO: pagination.
     */
    getDiscussionList(callback) {
        console.log('ClientMock.getDiscussionList');

    }

    /* Returns a list of all discussions in a specified category.
     *
     */
    getCategoryDiscussionList(categoryID, pageIndex, itemIndex,
            responseCallback, errorCallback) {
        console.log('ClientMock.getCategoryDiscussionList'
            + ' categoryID '+ categoryID
            + ' pageIndex ' + pageIndex
            + ' itemIndex ' + itemIndex);

        var discussions = []
        for (var i = 1; i <= DISCUSSIONS_PER_PAGE; ++i) {
            var DiscussionID = (DISCUSSIONS_PER_PAGE * (pageIndex - 1)) + i;
            discussions.push(
                {
                    DiscussionID: DiscussionID,
                    Name: 'Test discussion ' + DiscussionID,
                },
            );
        }

        var result = {
            pageIndex: pageIndex,
            discussions: discussions
        };

        return this._request(result, responseCallback, null, null);
    }
};

export { ClientMock as default };

