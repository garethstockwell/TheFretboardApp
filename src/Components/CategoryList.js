/**
 * CategoryList
 */

'use strict';

import React, {
    Component,
    View,
    Text,
} from 'react-native';

const CategoryListItem = require('./CategoryListItem');
const ListViewSectioned = require('./ListViewSectioned');
const Styles = require('../Styles');

/*! List of discussion categories
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      onLoadingChanged: function(bool)
 *          required: false
 *
 *      onPress: function(object)
 *          required: false
 */
class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            data: null,
        };
    }

    componentWillMount() {
        console.log('CategoryList.componentWillMount');
        this.load();
    }

    load() {
        console.log('CategoryList.load');

        this.props.onLoadingChanged(true);

        this.props.client.getCategoryListSectioned(
            this.onGetCategoryListResponse.bind(this),
            this.onClientError.bind(this)
        );
    }

    onGetCategoryListResponse(response) {
        console.log('CategoryList.onGetCategoryListResponse');

        this.setState({
            error: false,
            data: response,
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

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={Styles.liSectionHeading}>
                <Text style={Styles.liSectionHeadingText}>
                    {sectionData.Name}
                </Text>
            </View>
        );
    }

    renderRow(categoryData) {
        return (
            <CategoryListItem
                categoryData={categoryData}
                onPress={(categoryData) => this.props.onPress(categoryData)}
            />
        );
    }

    renderBody() {
        if (this.state.error) {
            console.log('CategoryList.renderBody error');
            return (
                <Text>ERROR</Text>
            );
        } else {
            if (this.state.data != null) {
                return (
                    <ListViewSectioned
                        renderSectionHeader={this.renderSectionHeader}
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
                {this.renderBody()}
            </View>
        );
    }
}

module.exports = CategoryList;

