/**
 * ClientMock
 *
 * Interface to Mock Forums API
 * https://blog.Mockforums.com/api/
 */

'use strict';

var ClientUtils = require('./ClientUtils');

const DISCUSSIONS_PER_PAGE = 20;

class ClientMock {
    logIn(username, password, callback) {
        return ClientUtils.dummyLogIn(username, password, callback);
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
        console.log('ClientMock.getCategoryList');

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

        return ClientUtils.dummyRequest(result, responseCallback, null, null);
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

        return ClientUtils.dummyRequest(result, responseCallback, null, null);
    }
};

export { ClientMock as default };

