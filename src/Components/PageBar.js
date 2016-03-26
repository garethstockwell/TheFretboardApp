/**
 * PageBar
 *
 * Used to navigate between pages of a list.
 */

'use strict';

import React, {
    Component,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const Styles = require('../Styles');

/*! Bar for navigating between pages within paginated lists
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      currentPage: int
 *          required: true
 *
 *      goToPage: function(int)
 *          required: true
 *
 *      numPages: int
 *          required: true
 */
class PageBar extends React.Component {
    _goToPrev() {
        console.log('PageBar._goToPrev');
        this.props.goToPage(this.props.currentPage - 1);
    }

    _goToNext() {
        console.log('PageBar._goToNext');
        this.props.goToPage(this.props.currentPage + 1);
    }

    _renderPrev() {
        if (this.props.currentPage > 1) {
            return (
                <View style={Styles.pageBarLeft}>
                    <TouchableHighlight onPress={() => this._goToPrev()}>
                        <Text style={Styles.liPageBarText}>
                            &lt;
                        </Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    _renderStatus() {
        return (
            <View style={Styles.pageBarCenter}>
                <Text style={Styles.liPageBarText}>
                    Page {this.props.currentPage} of {this.props.numPages}
                </Text>
            </View>
        );
    }

    _renderNext() {
        if (this.props.currentPage < this.props.numPages) {
            return (
                <View style={Styles.pageBarRight}>
                    <TouchableHighlight onPress={() => this._goToNext()}>
                        <Text style={Styles.liPageBarText}>
                            &gt;
                        </Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={Styles.liPageBar}>
                {this._renderPrev()}
                {this._renderStatus()}
                {this._renderNext()}
            </View>
        );
    }
};

module.exports = PageBar;
