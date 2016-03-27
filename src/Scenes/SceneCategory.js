/**
 * SceneCategory
 *
 * Scene for display of list of discussions within a category.
 */

'use strict';

import React from 'react-native';

const DiscussionList = require('../Components/DiscussionList');
const Scene = require('./Scene');
const Styles = require('../Styles')

/*! Scene which displays discussions in a category
 *
 *  propTypes:
 *      ...Scene.propTypes
 *
 *      categoryData: object
 *          required: true
 *
 *      onPressDiscussion: function(navigator, object)
 *          required: true
 */
class SceneCategory extends Scene {
    renderBody() {
        return (
            <DiscussionList
                client={this.props.client}
                categoryData={this.props.categoryData}
                onPress={(discussionData) =>
                        this.props.onPressDiscussion(
                            this.props.navigator, discussionData)}
                onScroll={() => this.onScroll()}
                onLoadingChanged={(value) => this.onLoadingChanged(value)}
            />
        );
    }
}

module.exports = SceneCategory;

