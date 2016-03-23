/**
 * CategoryList
 */

'use strict';

import React, {
    View,
    Text,
} from 'react-native';

import Client from '../Client/Client';
const CategoryListItem = require('./CategoryListItem');
const ListViewSimple = require('./ListViewSimple');
const ListViewSectioned = require('./ListViewSectioned');
const Styles = require('../Styles');

class CategoryList extends ListViewSectioned {
    componentDidMount() {
        var data = this.props.categoryListData;
        console.log('CategoryList.componentDidMount data ' + data);
        if (data) {
            this.onDataChanged(data);
        } else {
            this.setLoading(true);
            this.load();
        }
    }

    load() {
        console.log('CategoryList.load');
        Client.getCategoryListSectioned(
            this.onGetCategoryListResponse.bind(this),
            this.onClientError.bind(this));
    }

    onGetCategoryListResponse(response) {
        console.log('CategoryList.onGetCategoryListResponse');
        this.onDataChanged(response);
        this.setLoading(false);
    }

    onClientError(error) {
        console.log('CategoryList.onClientError');
        this.setState({error: error});
        this.setLoading(false);
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={Styles.liSectionHeading}>
                <Text style={Styles.liSectionHeadingText}>{sectionData.Name}</Text>
            </View>
        );
    }

    renderRow(item) {
        return (
            <CategoryListItem
                item={item}
                onPress={(categoryID, categoryName) =>
                    this.props.onPress(categoryID, categoryName)}
            />
        );
    }

    render() {
        // TODO: this should compose ListView, not inherit from it
        if (this.state.error) {
            return (
                <View style={Styles.container}>
                    <Text>ERROR</Text>
                </View>
            );
        } else {
            return super.render();
        }
    }
}

module.exports = CategoryList;

