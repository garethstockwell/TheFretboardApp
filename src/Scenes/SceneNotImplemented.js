/**
 * SceneNotImplemented
 *
 * Scene used to indicate that a function is not implemented.
 */

'use strict';

import React from 'react-native';

const Scene = require('./Scene');
const Utils = require('../Lib/Utils');

/*! Scene used to indicate that a function is not implemented
 *
 *  propTypes:
 *      ...Scene.propTypes
 */
class SceneNotImplemented extends Scene {
    renderBody() {
        return Utils.errorComponent('Not implemented');
    }
}

module.exports = SceneNotImplemented;

