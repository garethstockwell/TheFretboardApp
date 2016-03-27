/**
 * DiscussionList
 */

'use strict';

import React, {
    Component,
    View,
    Text,
} from 'react-native';

const DiscussionListItem = require('./DiscussionListItem');
const ListViewPaged = require('./ListViewPaged');
const Styles = require('../Styles');

/*! List of discussions
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      categoryData: object
 *          required: true
 *
 *      currentPage: int
 *          required: false
 *
 *      onLoadingChanged: function(bool)
 *          required: false
 *
 *      onPress: function(object)
 *          required: false
 */
class DiscussionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            data: null,
        };
    }

    componentWillMount() {
        var currentPage = this.props.currentPage || 1;
        console.log('DiscussionList.componentWillMount currentPage '
            + currentPage);
        this.load(currentPage, 0);
    }

    goToPage(pageIndex) {
        console.log('DiscussionList.goToPage ' + pageIndex);
        this.load(pageIndex, this.state.itemsPerPage);
    }

    load(pageIndex, itemsPerPage) {
        console.log('DiscussionList.load ' + pageIndex);

        this.props.onLoadingChanged(true);

        var itemIndex = ((pageIndex - 1) * itemsPerPage) + 1;

        this.props.client.getCategoryDiscussionList(
            this.props.categoryData['CategoryID'],
            pageIndex,
            itemIndex,
            this.onGetDiscussionListResponse.bind(this),
            this.onClientError.bind(this)
        );
    }

    onGetDiscussionListResponse(response) {
        console.log('DiscussionList.onGetDiscussionListResponse'
                + ' pageIndex ' + response.pageIndex);

        if (response.pageIndex == 1) {
            var itemsPerPage = response.discussions.length;
            console.log('DiscussionList.onGetDiscussionListResponse'
                + ' itemsPerPage ' + itemsPerPage);
            this.setState({itemsPerPage: itemsPerPage});
        }

        this.setState({
            error: false,
            data: response.discussions,
            currentPage: response.pageIndex,
        });

        this.props.onLoadingChanged(false);
    }

    onClientError(error) {
        console.log('CategoryList.onClientError');

        this.setState({
            error: error,
            data: null,
        });

        this.props.onLoadingChanged(false);
    }

    renderRow(discussionData) {
        return (
            <DiscussionListItem
                discussionData={discussionData}
                onPress={(discussionData) => this.props.onPress(discussionData)}
            />
        );
    }

    _renderBody() {
        if (this.state.error) {
            console.log('DiscussionList._renderBody error');
            return (
                <Text>ERROR</Text>
            );
        } else {
            if (this.state.data) {
                var totalNumItems =
                    this.props.categoryData['CountAllDiscussions'];
                return (
                    <ListViewPaged
                        totalNumItems={totalNumItems}
                        itemsPerPage={this.state.itemsPerPage}
                        currentPage={this.state.currentPage}
                        goToPage={this.goToPage.bind(this)}
                        renderRow={this.renderRow.bind(this)}
                        data={this.state.data}
                    />
                );
            }
        }
    }

    render() {
        return (
            <View style={Styles.viewContainer}>
                {this._renderBody()}
            </View>
        );
    }
}

module.exports = DiscussionList;

