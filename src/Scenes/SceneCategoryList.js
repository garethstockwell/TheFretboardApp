/**
 * SceneCategoryList
 *
 * Scene for display of list of categories.
 */

'use strict';

import React from 'react-native';

const CategoryList = require('../Components/CategoryList');
const Scene = require('./Scene');
const Styles = require('../Styles');

/*! Scene which displays a list of categories
 *
 *  propTypes:
 *      ...Scene.propTypes
 *
 *      onPressCategory: function(navigator, object)
 *          required: true
 */
class SceneCategoryList extends Scene {
    renderBody() {
        return (
            <CategoryList
                client={this.props.client}
                onPress={(categoryData) =>
                    this.props.onPressCategory(
                        this.props.navigator, categoryData)}
                onScroll={() => this.onScroll()}
                onLoadingChanged={(value) => this.onLoadingChanged(value)}
            />
        );
    }
}

module.exports = SceneCategoryList;

