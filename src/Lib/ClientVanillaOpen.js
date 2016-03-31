/**
 * ClientVanillaOpen
 *
 * Interface to the version of the Vanilla Forums API implemented by the free
 * plugin.
 *
 * https://github.com/kasperisager/vanilla-api/wiki
 */

'use strict';

import ClientUtils from './ClientUtils';

class ClientVanillaOpen {
    constructor(domain) {
        this.url = 'http://' + domain + '/api';
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
        console.log('ClientVanillaOpen.getCategoryList');

        return ClientUtils.getRequest(
                this.url + '/categories',
                (data => ClientUtils.categoryListToFlat(data)),
                responseCallback, errorCallback);
    }

    /* Returns a list of all discussions in a specified category.
     *
     */
    getCategoryDiscussionList(categoryID, pageIndex, itemIndex,
            responseCallback, errorCallback) {
        console.log('ClientVanillaOpen.getCategoryDiscussionList'
            + ' categoryID '+ categoryID
            + ' pageIndex ' + pageIndex
            + ' itemIndex ' + itemIndex);

        var url = '/categories/' + categoryID;

        return ClientUtils.getRequest(
                this.url + url,
                (data => {
                    return {
                        // TODO: support pagination
                        pageIndex: 1,
                        discussions: data.Discussions || [],
                    };
                }), responseCallback, errorCallback);
    }
};

export { ClientVanillaOpen as default };

