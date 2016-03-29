/**
 * Utils
 */

'use strict';

import React, {
    View,
    Text,
} from 'react-native';

const Styles = require('../Styles');

/*! Return React component displaying an error message
 */
var errorComponent = function(message) {
    return (
        <View style={[Styles.viewContainer, Styles.viewCenter]}>
            <Text style={Styles.textError}>
                Error: {message}
            </Text>
        </View>
    );
};

module.exports = {
    errorComponent: errorComponent,
};
