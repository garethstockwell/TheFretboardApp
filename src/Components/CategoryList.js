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
const Utils = require('../Lib/Utils');

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

        this.props.client.getCategoryList(
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
        console.log('CategoryList.renderSectionHeader');
        return (
            <View style={Styles.viewListSectionHeading}>
                <Text style={Styles.textListSectionHeading}>
                    {sectionData.Name}
                </Text>
            </View>
        );
    }

    renderRow(categoryData) {
        console.log('CategoryList.renderRow');
        return (
            <CategoryListItem
                categoryData={categoryData}
                onPress={(categoryData) => this.props.onPress(categoryData)}
            />
        );
    }

    renderBody() {
        if (this.state.error) {
            console.log('CategoryList.renderBody error: '
                + this.state.error.message);
            return Utils.errorComponent(this.state.error.message);
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

