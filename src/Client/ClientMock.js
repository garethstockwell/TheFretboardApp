/**
 * ClientMock
 *
 * Interface to Mock Forums API
 * https://blog.Mockforums.com/api/
 */

'use strict';

const RESPONSE_DELAY = 1000;

class ClientMock {
    /* Log in
     *
     */
    logIn(username, password, callback) {
        console.log('ClientMock.logIn'
            + ' username ' + username
            + ' password ' + password);

        setTimeout(
            () => {
                var result = (username == 'test' && password == 'abc');
                callback(result);
            },
            RESPONSE_DELAY
        );
    }

    /* Log out.
     *
     */
    logOut(callback) {
        console.log('ClientMock.logOut');

        setTimeout(
            () => { callback(); },
            RESPONSE_DELAY
        );
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

        setTimeout(
            () => {
                responseCallback({
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
                });
            },
            RESPONSE_DELAY
        );
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

        var discussionsPerPage = 20;

        var discussions = []
        for (var i = 1; i <= discussionsPerPage; ++i) {
            var DiscussionID = (discussionsPerPage * (pageIndex - 1)) + i;
            discussions.push(
                {
                    DiscussionID: DiscussionID,
                    Name: 'Test discussion ' + DiscussionID,
                },
            );
        }

        setTimeout(
            () => {
                responseCallback({
                    pageIndex: pageIndex,
                    discussions: discussions
                });
            },
            RESPONSE_DELAY
        );
    }
};

export { ClientMock as default };

