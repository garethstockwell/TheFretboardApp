/**
 * Spinner.Android
 *
 * Activity indicator for Android.
 */

'use strict';

import React, {
    Component,
    ProgressBarAndroid,
} from 'react-native';

const Styles = require('../Styles');

/*! Spinner
 *
 *  propTypes:
 *      ...View.propTypes
 */
class Spinner extends React.Component {
    render() {
        return (
            <ProgressBarAndroid
                indeterminate={true}
                styleAttr={'Large'}
                color={'white'}
                style={Styles.viewContainer} />
        );
    }
};

module.exports = Spinner;

