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
    goToPrev() {
        console.log('PageBar.goToPrev');
        this.props.goToPage(this.props.currentPage - 1);
    }

    goToNext() {
        console.log('PageBar.goToNext');
        this.props.goToPage(this.props.currentPage + 1);
    }

    renderPrev() {
        if (this.props.currentPage > 1) {
            return (
                <View style={Styles.pageBarLeft}>
                    <TouchableHighlight onPress={() => this.goToPrev()}>
                        <Text style={Styles.liPageBarText}>
                            &lt;
                        </Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    renderStatus() {
        return (
            <View style={Styles.pageBarCenter}>
                <Text style={Styles.liPageBarText}>
                    Page {this.props.currentPage} of {this.props.numPages}
                </Text>
            </View>
        );
    }

    renderNext() {
        if (this.props.currentPage < this.props.numPages) {
            return (
                <View style={Styles.pageBarRight}>
                    <TouchableHighlight onPress={() => this.goToNext()}>
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
                {this.renderPrev()}
                {this.renderStatus()}
                {this.renderNext()}
            </View>
        );
    }
};

module.exports = PageBar;
