/**
 * ListPaged
 */

'use strict';

import React, {
    Component,
} from 'react-native';

const Styles = require('../Styles');

/*! List of discussions
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      currentPage: int
 *          required: false
 *
 *      onLoadingChanged: function(bool)
 *          required: false
 */
class ListPaged extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.currentPage,
            pageData: {}
        };
    }

    _load(pageIndex) {
        console.log('*** ListPaged.load page ' + pageIndex);
        if (this.state.pageData[pageIndex]) {
            console.log('*** YES');
        } else {
            console.log('*** NO');
        }
    }
}

module.exports = ListPaged;

