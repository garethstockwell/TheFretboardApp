/**
 * SceneCategoryList
 *
 * Scene for display of list of categories.
 */

'use strict';

import React, {
    View,
    Text,
} from 'react-native';

const CategoryList = require('../Components/CategoryList');
const Scene = require('./Scene');
const Styles = require('../Styles');

class SceneCategoryList extends Scene {
    _onPressCategory(categoryData) {
        this.props.navigator.push({
            id: 'SceneCategory',
            title: categoryData['Name'],
            passProps: {
                categoryData: categoryData,
            },
        })
    }

    renderBody() {
        return (
            <CategoryList
                onPress={(categoryData) => this._onPressCategory(categoryData)}
                onScroll={() => this._onScroll()}
                onLoadingChanged={(value) => this._onLoadingChanged(value)}
            />
        );
    }
}

module.exports = SceneCategoryList;

