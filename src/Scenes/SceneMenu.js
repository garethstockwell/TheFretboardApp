/**
 * SceneMenu
 *
 * Scene for display of main menu.
 */

'use strict';

import React, {
    Text,
    View,
} from 'react-native';

const Button = require('../Components/Button');
const Scene = require('./Scene');
const Styles = require('../Styles')

/*! Scene which displays main menu.
 *
 *  propTypes:
 *      ...Scene.propTypes
 */
class SceneMenu extends Scene {
    renderBody() {
        return (
            <View style={Styles.viewDialog}>
                <View style={Styles.viewMargin}>
                    <Button
                        onPress={() => this.props.logOut()}
                        text={'Log out'}
                    />
                </View>
            </View>
        );
    }
}

module.exports = SceneMenu;

