/**
 * NavigationBar
 */

'use strict';

import React, {
    Component,
    Image,
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
        };
    }

    title() {
        var navState = this.props.navState;
        var routes = navState.routeStack;
        if (routes.length) {
            var route = routes[routes.length - 1];
            return route.title;
        }
        return '';
    }

    render() {
        return (
            <View style={Styles.viewNavbar}>
                <View style={Styles.viewNavbarButton}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.onPressMenu(this.props.navigator)}
                    >
                        <Image
                            source={require('../../images/LogoSmall.png')}
                            style={Styles.iconNavbar}
                        />
                    </TouchableWithoutFeedback>
                </View>

                <View style={Styles.viewNavbarTitle}>
                    <Text style={Styles.textNavbarTitle}>
                        {this.title()}
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

module.exports = NavigationBar;
