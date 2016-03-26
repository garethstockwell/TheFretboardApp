/**
 * SceneDiscussion
 *
 * Scene for display of a discussion.  A discussion consists of an original
 * posting, plus zero or more comments.
 */

'use strict';

import React, {
    View,
} from 'react-native';

const Discussion = require('../Components/Discussion');
const Scene = require('./Scene');
const Styles = require('../Styles');

/*! Scene which displays a discussion
 *
 *  propTypes:
 *      ...Scene.propTypes
 *
 *      discussionData: object
 *          required: true
 */
class SceneDiscussion extends Scene {
    renderBody() {
        console.log('SceneDiscussion.renderBody ' + this.props.discussionData);
        return (
            <Discussion
                discussionData={this.props.discussionData}
                onLoadingChanged={(value) => this._onLoadingChanged(value)}
            />
        );
    }
}

module.exports = SceneDiscussion;

