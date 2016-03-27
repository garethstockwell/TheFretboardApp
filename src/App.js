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

import ClientMock from './Client/ClientMock';
import ClientVanilla from './Client/ClientVanilla';

const NavigationBar = require('./Components/NavigationBar');
//const NavigationBar = require('./Components/NavigationBarBreadcrumb');
const SceneCategoryList = require('./Scenes/SceneCategoryList');
const SceneCategory = require('./Scenes/SceneCategory');
const SceneDiscussion = require('./Scenes/SceneDiscussion');
const SceneLogin = require('./Scenes/SceneLogin');
const SceneMenu = require('./Scenes/SceneMenu');
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
            serverDomain: '',
            login: true,
            username: null,
        };
    }

    _client() {
        if (this.state.serverDomain == '') {
            return new ClientMock();
        } else {
            return new ClientVanilla(this.state.serverDomain);
        }
    }

    _navigationBar() {
        return (
            <NavigationBar
                onPressMenu={this._navMenu.bind(this)}
            />
        )
    }

    _logOut() {
        this.setState({
            username: null,
            login: true
        });
    }

    _loginComplete(username) {
        console.log('App.loginComplete username ' + username)
        this.setState({
            username: username,
            login: false,
        });
    }

    _renderLogin() {
        return (
            <SceneLogin
                client={this._client()}
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
                    title: 'Categories',
                }}
                navigationBar={this._navigationBar()}
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
                    client={this._client()}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneMenu') {
            return (
                <SceneMenu
                    navigator={navigator}
                    navigationBar={this._navigationBar()}
                    client={this._client()}
                    username={this.state.username}
                    onPressLogOut={this._logOut.bind(this)}
                    onPressCategoryList={this._navCategoryList}
                    serverDomain={this.state.serverDomain}
                    onServerDomainChange={this._setServerDomain.bind(this)}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneCategoryList') {
            return (
                <SceneCategoryList
                    navigator={navigator}
                    navigationBar={this._navigationBar()}
                    client={this._client()}
                    onPressCategory={this._navCategory}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneCategory') {
            return (
                <SceneCategory
                    navigator={navigator}
                    navigationBar={this._navigationBar()}
                    client={this._client()}
                    onPressDiscussion={this._navDiscussion}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneDiscussion') {
            return (
                <SceneDiscussion
                    navigator={navigator}
                    navigationBar={this._navigationBar()}
                    client={this._client()}
                    {...route.passProps}
                />
            );
        }

        return this.noRoute(navigator);
    }

    noRoute(navigator) {
        return (
            <View style={Styles.viewContainer}>
                <TouchableOpacity
                        onPress={() => navigator.pop()}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>renderScene</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // DEV methods

    _setServerDomain(serverDomain) {
        if (this.state.serverDomain != serverDomain) {
            console.log('App._setServerDomain ' + serverDomain);

            this.setState({
                serverDomain: serverDomain,
                login: true,
                username: null,
            });
        }
    }

    // Navigation methods

    _navMenu(navigator) {
        console.log('App._navMenu ' + navigator);

        navigator.push({
            id: 'SceneMenu',
            title: 'Menu',

            // Should be FloatFromBottom, but this isn't implemented
            //sceneConfig: Navigator.SceneConfigs.FadeAndroid,
        })
    }

    _navCategoryList(navigator) {
        console.log('App._navCategoryList');

        navigator.resetTo({
            id: 'SceneCategoryList',
            title: 'Categories',
        });
    }

    _navCategory(navigator, categoryData) {
        console.log('App._navCategory ' + categoryData['Name']);

        navigator.push({
            id: 'SceneCategory',
            title: categoryData['Name'],
            passProps: {
                categoryData: categoryData,
            },
        });
    }

    _navDiscussion(navigator, discussionData) {
        console.log('App._navDiscussion ' + discussionData['Name'])

        navigator.push({
            id: 'SceneDiscussion',
            title: 'Discussion',
            passProps: {
                discussionData: discussionData,
            },
        })
    }
}

module.exports = App;

