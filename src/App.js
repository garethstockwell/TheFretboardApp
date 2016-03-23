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
const SceneSplash = require('./Scenes/SceneSplash');
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
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentWillMount() {
        // Load data for first scene
        Client.getCategoryListSectioned(
            this.onGetCategoryListResponse.bind(this),
            this.onClientError.bind(this));
    }

    onGetCategoryListResponse(response) {
        this.setState({
            loaded: true,
            categoryListData: response,
        });
    }

    onClientError(error) {
        console.log('App.onClientError');
        this.setState({
            loaded: true,
            error: error,
        });
    }

    render() {
        if (this.state.loaded) {
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
                        passProps: {
                            categoryListData: this.state.categoryListData,
                        },
                    }}
                    navigationBar={NavigationBar}
                    renderScene={this.renderScene.bind(this)}
                />
            );
        } else {
            return (
                <SceneSplash />
            );
        }
    }

    renderScene(route, navigator) {
        androidAddBackButtonListener(navigator);

        if (route.id === 'SceneSplash') {
            return (
                <SceneSplash
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
                    route={route}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneCategory') {
            return (
                <SceneCategory
                    navigator={navigator}
                    {...route.passProps}
                />
            );
        }

        if (route.id === 'SceneDiscussion') {
            return (
                <SceneDiscussion
                    navigator={navigator}
                    title={route.title}
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

