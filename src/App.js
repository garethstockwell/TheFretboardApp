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

import ClientMock from './Lib/ClientMock';
import ClientVanilla from './Lib/ClientVanilla';

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
function androidAddBackButtonListener(navigator) {
    console.log('App.androidAddBackButtonListener');

    BackAndroid.addEventListener('hardwareBackPress', () => {
        var routesLength = navigator.getCurrentRoutes().length;

        console.log('App.backAndroid routesLength ' + routesLength);

        if (routesLength === 1) {
            return false;
        }

        navigator.pop();
        return true;
    });
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

    client() {
        if (this.state.serverDomain == '') {
            return new ClientMock();
        } else {
            return new ClientVanilla(this.state.serverDomain);
        }
    }

    navigationBar() {
        return (
            <NavigationBar
                onPressMenu={this.navMenu.bind(this)}
            />
        )
    }

    logOut() {
        this.setState({
            username: null,
            login: true
        });
    }

    loginComplete(username) {
        console.log('App.loginComplete username ' + username)
        this.setState({
            username: username,
            login: false,
        });
    }

    renderLogin() {
        return (
            <SceneLogin
                client={this.client()}
                onLoginComplete={this.loginComplete.bind(this)}
            />
        );
    }

    renderNavigator() {
        return (
            <Navigator
                ref={(navigator) => androidAddBackButtonListener(navigator)}
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
                navigationBar={this.navigationBar()}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }

    render() {
        if (this.state.login) {
            return this.renderLogin();
        } else {
            return this.renderNavigator();
        }
    }

    renderScene(route, navigator) {
        console.log('App.renderScene ' + this.getRoute(navigator));

        if (route.id === 'SceneLogin') {
            return (
                <SceneLogin
                    navigator={navigator}
                    client={this.client()}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneMenu') {
            return (
                <SceneMenu
                    navigator={navigator}
                    navigationBar={this.navigationBar()}
                    client={this.client()}
                    username={this.state.username}
                    onPressLogOut={this.logOut.bind(this)}
                    onPressCategoryList={this.navCategoryList.bind(this)}
                    serverDomain={this.state.serverDomain}
                    onServerDomainChange={this.setServerDomain.bind(this)}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneCategoryList') {
            return (
                <SceneCategoryList
                    navigator={navigator}
                    navigationBar={this.navigationBar()}
                    client={this.client()}
                    onPressCategory={this.navCategory.bind(this)}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneCategory') {
            return (
                <SceneCategory
                    navigator={navigator}
                    navigationBar={this.navigationBar()}
                    client={this.client()}
                    onPressDiscussion={this.navDiscussion.bind(this)}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneDiscussion') {
            return (
                <SceneDiscussion
                    navigator={navigator}
                    navigationBar={this.navigationBar()}
                    client={this.client()}
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

    setServerDomain(serverDomain) {
        if (this.state.serverDomain != serverDomain) {
            console.log('App.setServerDomain ' + serverDomain);

            this.setState({
                serverDomain: serverDomain,
                login: true,
                username: null,
            });
        }
    }

    // Navigation methods

    getRoute(navigator) {
        var routes = navigator.getCurrentRoutes();
        var ids = [];
        for (var i = 0; i < routes.length; ++i) {
            ids.push(routes[i].id);
        }
        return ids;
    }

    navMenu(navigator) {
        console.log('App.navMenu ' + navigator);

        var routes = navigator.getCurrentRoutes();
        if (routes.length && routes[routes.length - 1].id == 'SceneMenu') {
            // Close the menu
            navigator.pop();
        } else {
            // Open the menu
            navigator.push({
                id: 'SceneMenu',
                title: 'Menu',

                // Should be FloatFromBottom, but this isn't implemented
                //sceneConfig: Navigator.SceneConfigs.FadeAndroid,
            })
        }
    }

    navCategoryList(navigator) {
        console.log('App.navCategoryList');

        navigator.resetTo({
            id: 'SceneCategoryList',
            title: 'Categories',
        });
    }

    navCategory(navigator, categoryData) {
        console.log('App.navCategory ' + categoryData['Name']);

        navigator.push({
            id: 'SceneCategory',
            title: categoryData['Name'],
            passProps: {
                categoryData: categoryData,
            },
        });
    }

    navDiscussion(navigator, discussionData) {
        console.log('App.navDiscussion ' + discussionData['Name'])

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

