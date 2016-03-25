/**
 * Button
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const Styles = require('../Styles');

class Button extends React.Component {
    render() {
        // TODO: 'enabled' property - grey out button and suppress clicks unless enabled
        return (
            <View style={Styles.viewButton}>
                <TouchableHighlight onPress={() => this.props.onPress()}>
                    <Text style={[Styles.textButton, this.props.textStyle]}>
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
};

module.exports = Button;
