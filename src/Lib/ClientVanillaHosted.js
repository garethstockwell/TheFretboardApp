/**
 * ClientVanillaHosted
 *
 * Interface to the version of the Vanilla Forums API available to hosted
 * customers.
 *
 * https://blog.vanillaforums.com/api/
 */

'use strict';

import ClientUtils from './ClientUtils';

class ClientVanillaHosted {
    constructor(domain) {
        this.url = 'http://' + domain + '/api/v1';
    }

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
        console.log('ClientVanillaHosted.getCategoryList');

        return ClientUtils.getRequest(
                this.url + '/categories/list.json',
                (data => ClientUtils.categoryListToSections(data)),
                responseCallback, errorCallback);
    }

    /* Returns a list of all discussions in a specified category.
     *
     */
    getCategoryDiscussionList(categoryID, pageIndex, itemIndex,
            responseCallback, errorCallback) {
        console.log('ClientVanillaHosted.getCategoryDiscussionList'
            + ' categoryID '+ categoryID
            + ' pageIndex ' + pageIndex
            + ' itemIndex ' + itemIndex);
        var url = '/discussions/category.json?'
            + 'CategoryIdentifier=' + categoryID
            + '&'
            + 'Page=' + itemIndex;
        return ClientUtils.getRequest(
                this.url + url,
                (data => {
                    return {
                        pageIndex: pageIndex,
                        discussions: data.Discussions || [],
                    };
                }), responseCallback, errorCallback);
    }
};

export { ClientVanillaHosted as default };

