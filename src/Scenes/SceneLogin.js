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
    TextInput,
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
            username: '',
            password: '',
            waiting: false,
        }
    }

    login() {
        console.log('LoginView.login');

        this.setState({ waiting: true });

        Client.logIn(
            this.state.username,
            this.state.password,
            this.onLoginComplete.bind(this));
    }

    onLoginComplete(result) {
        console.log('SceneLogin.loginComplete ' + result);

        this.setState({ waiting: false });

        if (result) {
            this.props.onLoginComplete();
        } else {
            // TODO: display 'login failed' message
        }
    }

    _renderBody() {
        if (this.state.waiting) {
            return (
                <View style={Styles.loginView}>
                    <View style={Styles.frontPageSpinner}>
                        <Spinner />
                    </View>
                </View>
            );
        } else {
            // TODO: 'username' and 'password' labels
            // TODO: separation between TextInputs
            // TODO: rounded corners
            // TODO: add 'continue as guest'
            // TODO: add 'remember me' checkbox
            return (
                <View style={Styles.loginView}>
                    <TextInput
                         style={Styles.loginTextInput}
                         onChangeText={(text) => this.setState({username: text})}
                    />

                    <TextInput
                         style={Styles.loginTextInput}
                         secureTextEntry={true}
                         onChangeText={(text) => this.setState({password: text})}
                    />

                    <TouchableHighlight
                        onPress={() => this.login()}
                    >
                        <Text style={Styles.frontPageTitleText}>
                            Log in
                        </Text>
                    </TouchableHighlight>
                </View>
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

                {this._renderBody()}
            </View>
        );
    }
}

module.exports = SceneLogin;

