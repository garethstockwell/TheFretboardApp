/**
 * Scene
 *
 * Abstract base component for scenes within the application.
 */

'use strict';

import React, {
    Component,
    Navigator,
    View,
} from 'react-native';

const Spinner = require('../Components/Spinner');
const Styles = require('../Styles');

/*! Base class for scenes
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      navigationBar: NavigationBar
 *          required: true
 *
 *      navigator: Navigator
 *          required: true
 */
class Scene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            hideNavBar: false,
        }
    }

    onLoadingChanged(value) {
        console.log(this.constructor.name + '.onLoadingChanged ' + value);
        this.setState({ loading: value });
    }

    onScroll() {
        this.setState({ hideNavBar: true });
    }

    render() {
        console.log(this.constructor.name + '.render');

        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
            />
        );
    }

    renderLoading() {
        if (this.state.loading) {
            return (
                <View style={Styles.spinnerView}>
                    <Spinner />
                </View>
            );
        }
    }

    renderScene(route, navigator) {
        let navBar = this.props.navigationBar;
        if (navBar) {
            // TODO: hide navigation bar when scroll view is pulled down
            // TODO: hide navigation bar when spinner is shown
        }

        return (
            <View style={Styles.viewSceneBody}>
                {this.renderBody()}
                {this.renderLoading()}
            </View>
        );
    }
}

module.exports = Scene;

