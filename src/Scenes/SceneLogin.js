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
const Button = require('../Components/Button');
const Spinner = require('../Components/Spinner');
const Styles = require('../Styles');

class SceneLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            status: '',
            spinner: false,
        }
    }

    login() {
        console.log('LoginView.login');

        this.setState({
            spinner: true,
            status: 'Logging in',
        });

        Client.logIn(
            this.state.username,
            this.state.password,
            this.onLoginComplete.bind(this));
    }

    onLoginComplete(result) {
        console.log('SceneLogin.loginComplete ' + result);

        this.setState({ spinner: false });

        if (result) {
            this.props.onLoginComplete();
        } else {
            this.setState({ status: 'Log in failed' });
        }
    }

    _renderForm() {
        if (this.state.spinner) {
            return (
                <View style={Styles.viewLoginForm}>
                    <Spinner />
                </View>
            );
        } else {
            // TODO: add 'remember me' checkbox
            return (
                <View style={Styles.container}>
                    <View style={Styles.viewLoginForm}>
                        <View style={Styles.viewFormRow}>
                            <View style={Styles.viewLoginLabel}>
                                <Text style={Styles.textLoginLabel}>
                                    Username
                                </Text>
                            </View>

                            <View style={Styles.viewLoginTextInput}>
                                <TextInput
                                     style={Styles.textInputLogin}
                                     onChangeText={(text) => this.setState({
                                         username: text,
                                         status: '',
                                     })}
                                />
                            </View>
                        </View>

                        <View style={Styles.viewFormRow}>
                            <Text style={Styles.textLoginLabel}>
                                Password
                            </Text>

                            <TextInput
                                 style={Styles.textInputLogin}
                                 secureTextEntry={true}
                                 onChangeText={(text) => this.setState({
                                     password: text,
                                     status: '',
                                 })}
                            />
                        </View>
                    </View>

                    <View style={Styles.viewToolbar}>
                        <Button
                            onPress={() => this.props.onLoginComplete()}
                            text={'Skip'}
                        />

                        <Button
                            onPress={() => this.login()}
                            text={'Log in'}
                        />
                    </View>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={Styles.viewLogin}>
                <View style={Styles.viewLoginTitle}>
                    <Text style={Styles.textLoginTitle}>
                        The Fretboard
                    </Text>
                </View>

                <View style={Styles.viewLoginBody}>
                    <View style={Styles.viewLoginStatus}>
                        <Text style={Styles.textLoginStatus}>
                            {this.state.status}
                        </Text>
                    </View>
                    {this._renderForm()}
                </View>
            </View>
        );
    }
}

module.exports = SceneLogin;
