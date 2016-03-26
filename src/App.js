/**
 * App.js
 */

'use strict';

import React, {
    BackAndroid,
    Component,
    Navigator,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Client from './Client/Client';

const NavigationBar = require('./Components/NavigationBar');
const SceneCategoryList = require('./Scenes/SceneCategoryList');
const SceneCategory = require('./Scenes/SceneCategory');
const SceneDiscussion = require('./Scenes/SceneDiscussion');
const SceneLogin = require('./Scenes/SceneLogin');
const Styles = require('./Styles');

// Based on
// http://blog.paracode.com/2016/01/05/routing-and-navigation-in-react-native/
var _navigator;
function androidAddBackButtonListener(navigator) {
    if (!_navigator) {
        _navigator = navigator;

        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (_navigator.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigator.pop();
            return true;
        });
    }
}

class App extends Component {
    constructor(props) {
        console.log('--- TheFretboardApp starting ---');

        super(props);
        this.state = {
            login: true,
        }
    }

    _loginComplete() {
        this.setState({ login: false });
    }

    _renderLogin() {
        return (
            <SceneLogin
                onLoginComplete={this._loginComplete.bind(this)}
            />
        );
    }

    _renderNavigator() {
        return (
            <Navigator
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                initialRoute={{
                    id: 'SceneCategoryList',
                    title: 'Home',
                }}
                navigationBar={NavigationBar}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }

    render() {
        if (this.state.login) {
            return this._renderLogin();
        } else {
            return this._renderNavigator();
        }
    }

    renderScene(route, navigator) {
        androidAddBackButtonListener(navigator);

        if (route.id === 'SceneLogin') {
            return (
                <SceneLogin
                    navigator={navigator}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneCategoryList') {
            return (
                <SceneCategoryList
                    navigator={navigator}
                    navigationBar={NavigationBar}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneCategory') {
            return (
                <SceneCategory
                    navigator={navigator}
                    navigationBar={NavigationBar}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneDiscussion') {
            return (
                <SceneDiscussion
                    navigator={navigator}
                    navigationBar={NavigationBar}
                    {...route.passProps}
                />
            );
        }

        return this.noRoute(navigator);
    }

    noRoute(navigator) {
        return (
            <View style={Styles.container}>
                <TouchableOpacity
                        onPress={() => navigator.pop()}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>renderScene</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = App;

