/**
 * CommentList
 */

'use strict';

import React from 'react-native';
import Client from '../Client/Client';
const CommentListItem = require('./CommentListItem');
const ListViewPaged = require('./ListViewPaged');

class CommentList extends ListViewPaged {
    componentDidMount() {
        var currentPage = this.props.currentPage || 1;
        console.log('CommentList.componentDidMount currentPage '
            + currentPage);
        //this.setLoading(true);
        this.setState({
            currentPage: currentPage,
            discussionData: this.props.discussionData,
            itemCount: 0,
            //itemCount: this.props.categoryData['CountAllComments'],
        });
        this.loadCommentList();
    }

    loadCommentList() {
        console.log('CommentList.loadCommentList');
    }

    onCommentListLoaded(commentListData) {
        console.log('CommentList.onCommentListLoaded');
        this.onDataChanged(commentListData);
        this.setLoading(false);
    }

    renderItemRow(commentData) {
        return (
            <CommentListItem
                commentData={commentData}
            />
        );
    }
}

module.exports = CommentList;

