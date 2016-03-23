/**
 * CategoryList
 */

'use strict';

import React, {
    Component,
    View,
    Text,
} from 'react-native';

import Client from '../Client/Client';
const CategoryListItem = require('./CategoryListItem');
const ListViewSectioned = require('./ListViewSectioned');
const Styles = require('../Styles');

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        console.log('CategoryList data ' + props.data);
        this.state = {
            data: props.data || {},
        };
        if (data) {
            this.props.onLoadingChanged(false);
        }
    }

    componentDidMount() {
        console.log('CategoryList.componentDidMount data ' + this.state.data);

        if (!this.state.data) {
            this.props.onLoadingChanged(true);
            this.load();
        }
    }

    load() {
        console.log('CategoryList.load');

        Client.getCategoryListSectioned(
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

    _renderBody() {
        if (this.state) {
            if (this.state.error) {
                console.log('CategoryList._renderBody error');
                return (
                    <Text>ERROR</Text>
                );
            } else {
                return (
                    <ListViewSectioned
                        renderSectionHeader={this.renderSectionHeader}
                        renderRow={this.renderRow}
                        data={this.state.data}
                    />
                );
            }
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                {this._renderBody()}
            </View>
        );
    }
}

module.exports = CategoryList;

