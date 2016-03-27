/**
 * Pager
 */

'use strict';

/*! Pager
 *
 *  Arguments
 *      currentPage: int
 *          Index of current page
 *          Required: false
 *
 *      onCurrentPageDataChange: function(object)
 *          Required: false
 *
 *      prefetch: int
 *          Number of pages to fetch before and after the current page
 *          Required: false
 *
 *      request: function(int, callback)
 *          Required: true
 */
class Pager {
    constructor(args) {
        this.currentPage = 0;
        this._onCurrentPageDataChange = args.onCurrentPageDataChange;
        this._prefetch = args.prefetch || 0;
        this._request = args.request;

        this._page = {};

        this.setCurrentPage(args.currentPage || 1);
    }

    _getPage(pageIndex) {
        if (!this._page[pageIndex]) {
            this._page[pageIndex] = {
                request: null,
                data: null,
            };
        }
        return this._page[pageIndex];
    }

    setCurrentPage(pageIndex) {
        console.log('Pager.setCurrentPage ' + pageIndex);

        // TODO: discard old data

        this.currentPage = pageIndex;
        var page = this._load(this.currentPage);
        this._callback(pageIndex, page.data);

        // TODO: prefetch
    }

    currentPageData() {
        return this._getPage(this.currentPage).data;
    }

    _load(pageIndex) {
        var page = this._getPage(pageIndex);
        if (!page.data) {
            if (page.request && page.request.active) {
                console.log('Pager._load '
                    + pageIndex + ' already loading');
            } else {
                console.log('Pager._load ' + pageIndex);
                page.request = this._request(
                    pageIndex,
                    this._onLoadComplete.bind(this));
            }
        }
        return page;
    }

    _loadCancel(pageIndex) {
        var page = this._getPage(pageIndex);
        if (page.request) {
            console.log('Pager._loadCancel ' + pageIndex);
            page.request.cancel();
            page.request = null;
        }
    }

    _onLoadComplete(pageIndex, data) {
        console.log('Pager._onLoadComplete ' + pageIndex);

        var page = this._getPage(pageIndex);
        assert(page.request);
        page.request = null;
        page.data = data;

        if (pageIndex == this.currentPage) {
            this._callback(pageIndex, data);
        }
    }

    _callback(pageIndex, data) {
        if (this._onCurrentPageDataChange) {
            console.log('Pager._callback ' + pageIndex);

            this._onCurrentPageDataChange(pageIndex, data);
        }
    }
}

export { Pager as default };
