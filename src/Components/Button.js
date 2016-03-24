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
        return (
            <View style={Styles.button}>
                <TouchableHighlight onPress={() => this.props.onPress()}>
                    <Text style={Styles.buttonText}>
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
};

module.exports = Button;
