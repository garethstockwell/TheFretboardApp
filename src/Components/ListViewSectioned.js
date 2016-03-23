/**
 * ListViewSectioned
 *
 * Renders a ListView whose items are grouped into sections.
 */

'use strict';

import React, {
    Component,
    ListView,
    View,
} from 'react-native';

const Styles = require('../Styles');

class ListViewSectioned extends React.Component {
    constructor(props) {
        super(props);

        var getSectionData = function(dataBlob, sectionID) {
            return dataBlob[sectionID];
        };

        var getRowData = function(dataBlob, sectionID, rowID) {
            return dataBlob[rowID];
        };

        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        };
    }

    componentDidMount() {
        var data = this.props.data;

        var dataBlob = data.dataBlob || {};
        var sectionIDs = data.sectionIDs || [];
        var rowIDs = data.rowIDs || [];

        var numRows = rowIDs.reduce(function(total, entry){
            return total + entry.length;
        }, 0);

        console.log('ListViewSectioned.componentDidMount'
            + ' numSections ' + sectionIDs.length
            + ' numRows ' + numRows);

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(
                dataBlob, sectionIDs, rowIDs)
        });
    }

    render() {
        console.log('ListViewSectioned.render');

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.props.renderRow}
                renderSectionHeader={this.props.renderSectionHeader}
                style={Styles.listview}
                onScroll={this.props.onScroll}
            />
        );
    }
}

module.exports = ListViewSectioned;
