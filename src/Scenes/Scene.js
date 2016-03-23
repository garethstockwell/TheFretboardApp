/**
 * Scene
 *
 * Abstract base component for scenes within the application.
 */

'use strict';

import React, {
    Component,
    Navigator,
    Text, // DEBUGGING
    View,
} from 'react-native';

const Spinner = require('../Components/Spinner');
const Styles = require('../Styles');

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            hideNavBar: false,
        }
    }

    _onLoadingChanged(value) {
        console.log(this.constructor.name + '._onLoadingChanged ' + value);
        this.setState({ loading: value });
        this.props.onLoadingChanged(value);
    }

    _onScroll() {
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

    _renderLoading() {
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
            <View style={Styles.body}>
                {this.renderBody()}
                {this._renderLoading()}
            </View>
        );
    }
}

module.exports = Scene;

