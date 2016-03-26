/**
 * NavigationBar
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const Styles = require('../Styles');

/*! NavigationBar
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      onPressMenu: function()
 *          required: true
 */
class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'TEST',
        };
    }

    render() {
        console.log('HELLO');
        return (
            <View style={Styles.viewNavbar}>
                <View style={Styles.viewNavbarButton}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.onPressMenu()}
                    >
                        <Text style={Styles.textNavbarButton}>
                            Menu
                        </Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={Styles.viewNavbarTitle}>
                    <Text style={Styles.textNavbarTitle}>
                        {this.state.title}
                    </Text>
                </View>

                <View style={Styles.viewNavbarButton}>
                    <Text style={Styles.textNavbarButton}>
                        Not
                    </Text>
                </View>
            </View>
        );
    }
};

module.exports = (
    <NavigationBar />
);
