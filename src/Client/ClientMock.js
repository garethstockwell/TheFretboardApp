/**
 * ClientMock
 *
 * Interface to Mock Forums API
 * https://blog.Mockforums.com/api/
 */

'use strict';

var Symbol = require('es6-symbol');

let singleton = Symbol();
let singletonEnforcer = Symbol();

let instance = null;

class ClientMock {
    constructor(enforcer) {
        if (enforcer != singletonEnforcer) {
            throw "Cannot construct singleton";
        }
    }

    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new ClientMock(singletonEnforcer);
        }
        return this[singleton];
    }

    /* Log in
     *
     */
    logIn(userName, password, callback) {
        console.log('Client.logIn');

        setTimeout(
            () => {
                var result = (userName == 'test' && password == 'abc');
                callback(result);
            },
            500
        );
    }

    /* Log out.
     *
     */
    logOut(callback) {
        console.log('Client.logOut');

        setTimeout(
            () => { callback(); },
            500
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
        console.log('Client.getCategoryListSectioned');

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
            500
        );
    }

    /* Returns a list of all discussions.
     *
     * TODO: pagination.
     */
    getDiscussionList(callback) {
        console.log('Client.getDiscussionList');

    }

    /* Returns a list of all discussions in a specified category.
     *
     */
    getCategoryDiscussionList(categoryID, pageIndex, itemIndex,
            responseCallback, errorCallback) {
        console.log('Client.getCategoryDiscussionList'
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
            500
        );
    }
};

export { ClientMock as default };

