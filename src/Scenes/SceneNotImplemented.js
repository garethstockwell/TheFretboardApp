/**
 * SceneNotImplemented
 *
 * Scene used to indicate that a function is not implemented.
 */

'use strict';

import React, {
    Text,
    View,
} from 'react-native';

const Scene = require('./Scene');
const Styles = require('../Styles')

/*! Scene used to indicate that a function is not implemented
 *
 *  propTypes:
 *      ...Scene.propTypes
 */
class SceneNotImplemented extends Scene {
    renderBody() {
        return (
            <View style={[Styles.viewContainer, Styles.viewCenter]}>
                <Text style={Styles.textError}>
                    Not implemented
                </Text>
            </View>
        );
    }
}

module.exports = SceneNotImplemented;

