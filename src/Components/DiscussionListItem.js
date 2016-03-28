/**
 * DiscussionListItem
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const Styles = require('../Styles');

/*! Entry in list of dicussions
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      discussionData: object
 *          required: true
 */
class DiscussionListItem extends React.Component {
    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onPress(this.props.discussionData)}
            >
                <View style={Styles.viewListItem}>
                    <Text style={Styles.textListItem}>
                        {this.props.discussionData.Name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = DiscussionListItem;

