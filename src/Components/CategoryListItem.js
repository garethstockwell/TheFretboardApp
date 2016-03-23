/**
 * CategoryListItem
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const Styles = require('../Styles');

class CategoryListItem extends React.Component {
    render() {
        var CountAllDiscussions = '';
        if (this.props.categoryData.CountAllDiscussions) {
            CountAllDiscussions = ' ('
                + this.props.categoryData.CountAllDiscussions + ')';
        }

        return (
            <TouchableHighlight
                onPress={() => this.props.onPress(this.props.categoryData)}
            >
                <View style={Styles.li}>
                    <Text style={Styles.liText}>
                        {this.props.categoryData.Name}{CountAllDiscussions}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = CategoryListItem;

