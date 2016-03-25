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
            <View style={Styles.viewLogin}>
                <Text style={Styles.textLoginTitle}>
                    The Fretboard
                </Text>

                <View style={Styles.container}>
                    <Spinner />
                </View>
            </View>
        );
    }
}

module.exports = SceneSplash;

