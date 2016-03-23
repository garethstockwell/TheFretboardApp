/**
 * DiscussionList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const DiscussionListItem = require('./DiscussionListItem');
const ListViewPaged = require('./ListViewPaged');

class DiscussionList extends ListViewPaged {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var currentPage = this.props.currentPage || 1;
        console.log('DiscussionList.componentDidMount currentPage '
            + currentPage);
        this.setState({
            categoryData: this.props.categoryData,
            totalNumItems: this.props.categoryData['CountAllDiscussions'],
        });
        this.loadDiscussionList(currentPage);
    }

    goToPage(pageIndex) {
        console.log('DiscussionList.goToPage ' + pageIndex);
        this.loadDiscussionList(pageIndex);
    }

    loadDiscussionList(pageIndex) {
        console.log('DiscussionList.loadDiscussionList ' + pageIndex);

        this.setLoading(true);

        var itemIndex = ((pageIndex - 1) * this.state.itemsPerPage) + 1;

        Client.getCategoryDiscussionList(
            this.props.categoryData['CategoryID'],
            pageIndex,
            itemIndex,
            this.onDiscussionListResponse.bind(this)
        );
    }

    onDiscussionListResponse(response) {
        console.log('DiscussionList.onDiscussionListResponse');

        if (response.pageIndex == 1) {
            var itemsPerPage = response.discussions.length;
            console.log('DiscussionList.onDiscussionListResponse'
                + ' itemsPerPage ' + itemsPerPage);
            this.setState({itemsPerPage: itemsPerPage});
        }

        this.onDataChanged(response.pageIndex, response.discussions);
        this.setLoading(false);
    }

    renderItemRow(item) {
        return (
            <DiscussionListItem
                item={item}
                onPress={(discussionID, discussionName) =>
                    this.props.onPress(discussionID, discussionName)}
            />
        );
    }
}

module.exports = DiscussionList;

