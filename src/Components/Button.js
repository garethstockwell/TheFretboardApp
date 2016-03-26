/**
 * Button
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const Styles = require('../Styles');

/*! Toolbar button
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      textStyle: Text.style
 *          required: false
 *
 *      onPress: function()
 *          required: false
 */
class Button extends React.Component {
    render() {
        // TODO: 'enabled' property - grey out button and suppress clicks unless enabled
        return (
            <View style={[Styles.viewButton, this.props.style]}>
                <TouchableWithoutFeedback onPress={() => this.props.onPress()}>
                    <Text style={[Styles.textButton, this.props.textStyle]}>
                        {this.props.text}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
};

module.exports = Button;
