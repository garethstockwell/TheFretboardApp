/**
 * SceneLogin
 *
 * Login screen.
 */

'use strict';

import React, {
    Component,
    Navigator,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import Client from '../Client/Client';
const Spinner = require('../Components/Spinner');
const Styles = require('../Styles');

class SceneLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waiting: false,
        }
    }

    login() {
        console.log('LoginView.login');

        this.setState({ waiting: true });

        Client.logIn('test', 'abc', this.onLoginComplete.bind(this));
    }

    onLoginComplete(result) {
        console.log('SceneLogin.loginComplete ' + result);

        this.setState({ waiting: false });

        this.props.onLoginComplete();
    }

    _renderBody() {
        if (this.state.waiting) {
            return (
                <View style={Styles.frontPageSpinner}>
                    <Spinner />
                </View>
            );
        } else {
            return (
                <TouchableHighlight
                    onPress={() => this.login()}
                >
                    <Text style={Styles.frontPageTitleText}>
                        Log in
                    </Text>
                </TouchableHighlight>
            );
        }
    }

    render() {
        return (
            <View style={Styles.frontPage}>
                <View style={Styles.frontPageTitleView}>
                    <Text style={Styles.frontPageTitleText}>
                        The Fretboard
                    </Text>
                </View>

                <View style={Styles.loginView}>
                    {this._renderBody()}
                </View>
            </View>
        );
    }
}

module.exports = SceneLogin;

