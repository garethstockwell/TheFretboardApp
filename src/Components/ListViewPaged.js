/**
 * ListViewPaged
 *
 * Renders a ListView whose contents are paginated.
 */

'use strict';

import React, {
    ListView,
    View,
} from 'react-native';

const PageBar = require('./PageBar');
const Styles = require('../Styles');

/*! ListView which supports pagination
 *
 *  propTypes:
 *      ...View.propTypes
 *
 *      currentPage: int
 *          required: true
 *
 *      data: object
 *          required: true
 *
 *      goToPage: function(int)
 *          required: true
 *
 *      itemsPerPage: int
 *          required: true
 *
 *      onScroll: function()
 *          required: false
 *
 *      renderRow: function(object)
 *          required: true
 *
 *      totalNumItems: int
 *          required: true
 */
class ListViewPaged extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    pageBarItem() {
        var totalNumItems = this.props.totalNumItems || 0;
        var itemsPerPage = this.props.itemsPerPage;
        var numPages = 1;
        if (itemsPerPage) {
            numPages = Math.floor(
                (totalNumItems + itemsPerPage - 1) / itemsPerPage)
        }
        var data = {
            numPages: numPages,
        };
        console.log(this.constructor.name + '.pageBarItem'
            + ' totalNumItems ' + totalNumItems
            + ' itemsPerPage ' + itemsPerPage
            + ' numPages ' + data.numPages);
        return data;
    }

    componentWillMount() {
        console.log('ListViewPaged.componentWillMount');
        this.update();
    }

    componentWillReceiveProps() {
        console.log('ListViewPaged.componentWillReceiveProps');
        this.update();
    }

    update() {
        var data = this.props.data;

        console.log('ListViewPaged.update'
                + ' currentPage ' + this.props.currentPage
                + ' numItems ' + data.length);

        var pageBarItem = this.pageBarItem();

        var pageBarArray = [];

        if (pageBarItem.numPages > 1) {
            pageBarArray.push(pageBarItem);
        }

        if (this.listView) {
            this.listView.scrollTo({y: 0});
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                pageBarArray.concat(data).concat(pageBarArray))
        });
    }

    renderRow(item) {
        if (item.numPages) {
            return (
                <PageBar
                    currentPage={this.props.currentPage}
                    numPages={item.numPages}
                    goToPage={this.props.goToPage}
                />
            );
        } else {
            return this.props.renderRow(item);
        }
    }

    render() {
        return (
            <ListView
                ref={(component) => this.listView = component}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style={Styles.viewContainer}
                onScroll={this.props.onScroll}
            />
        );
    }
}

module.exports = ListViewPaged;
