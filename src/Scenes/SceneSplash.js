/**
 * SceneSplash
 *
 * Splash screen to display while application is loading.
 */

'use strict';

import React, {
    Component,
    Navigator,
    Text,
    View,
} from 'react-native';

const Spinner = require('../Components/Spinner');
const Styles = require('../Styles');

class SceneSplash extends Component {
    render() {
        return (
            <View style={Styles.frontPage}>
                <Text style={Styles.frontPageTitleText}>
                    The Fretboard
                </Text>

                <View style={Styles.frontPageSpinner}>
                    <Spinner />
                </View>
            </View>
        );
    }
}

module.exports = SceneSplash;

