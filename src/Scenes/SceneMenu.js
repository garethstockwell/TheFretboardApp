/**
 * SceneMenu
 *
 * Scene for display of main menu.
 */

'use strict';

import React, {
    Picker,
    ScrollView,
    Text,
    View,
} from 'react-native';

const Button = require('../Components/Button');
const Scene = require('./Scene');
const Styles = require('../Styles')

/*! Scene which displays main menu.
 *
 *  propTypes:
 *      ...Scene.propTypes
 */
class SceneMenu extends Scene {
    _createRow(data) {
        return (
            <View
                key={data[0]}
                style={Styles.viewDialogRow}>
                <Button
                    text={data[0]}
                    onPress={data[1]}
                />
            </View>
        );
    }

    _todo() {
        console.log('TODO: connect up this button');
    }

    _renderHeading(text) {
        return (
            <View style={Styles.viewDialogHeading}>
                <Text style={Styles.textDialogHeading}>
                    {text}
                </Text>
            </View>
        );
    }

    _renderSpacer() {
        return (
            <View style={Styles.viewDialogSectionSpacer} />
        );
    }

    _renderAccountGuest() {
        // TODO: maintain route stack when logging in
        return (
            <View style={Styles.viewContainer}>
                <View style={Styles.viewDialogRow}>
                    <Text style={Styles.textDialogItem}>
                        Not logged in
                    </Text>
                </View>

                <View style={Styles.viewDialogRow}>
                    <Button
                        text={'Log in'}
                        onPress={this.props.logOut}
                    />
                </View>
            </View>
        );
    }

    _renderAccountUser() {
        const rows = [
            ['Log out', this.props.logOut],
            ['Bookmarks', this._todo],
            ['Notifications', this._todo],
            ['Messages', this._todo],
            ['My discussions', this._todo],
            ['My drafts', this._todo],
        ];

        // TODO: maintain route stack when logging out
        return (
            <View style={Styles.viewContainer}>
                <View style={Styles.viewDialogRow}>
                    <Text style={Styles.textDialogItem}>
                        Logged in as {this.props.appState.username}
                    </Text>
                </View>

                {rows.map(this._createRow)}
            </View>
        );
    }

    _renderNavigation() {
        const rows = [
            ['Search', this._todo],
            ['Categories', this._todo],
            ['Recent discussions', this._todo],
            ['Activity', this._todo],
            ["Who's online", this._todo],
        ];

        return rows.map(this._createRow);
    }

    _renderAccount() {
        if (this.props.appState.username) {
            return this._renderAccountUser();
        } else {
            return this._renderAccountGuest();
        }
    }

    _renderDevelopment() {
        return (
            <View style={Styles.viewDialogRow}>
                <Picker
                    style={Styles.pickerDialog}
                    selectedValue='Mock'
                >
                    <Picker.Item label="Mock" value="" />
                    <Picker.Item label="thefretboard.co.uk" value="thefretboard.co.uk" />
                </Picker>
            </View>
        )
    }

    renderBody() {
        return (
            <ScrollView style={Styles.scrollViewDialog}>
                <View style={Styles.viewMargin}>
                    {this._renderHeading('Navigation')}
                    {this._renderNavigation()}

                    {this._renderSpacer()}

                    {this._renderHeading('Account')}
                    {this._renderAccount()}

                    {this._renderSpacer()}

                    {this._renderHeading('Development')}
                    {this._renderDevelopment()}
                </View>
            </ScrollView>
        );
    }
}

module.exports = SceneMenu;

