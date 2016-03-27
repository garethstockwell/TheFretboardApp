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
                    style={Styles.viewButtonDialog}
                    textStyle={Styles.textButtonDialog}
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
        const rows = [
            ['Log in', this.props.onPressLogOut],
        ];

        // TODO: maintain route stack when logging in
        return (
            <View style={Styles.viewContainer}>
                <View style={Styles.viewDialogRow}>
                    <View style={Styles.viewContainer}>
                        <Text style={Styles.textDialogItem}>
                            Not loggsed in
                        </Text>
                    </View>
                </View>

                {rows.map(this._createRow)}
            </View>
        );
    }

    _renderAccountUser() {
        const rows = [
            ['Log out', this.props.onPressLogOut],
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
                        Logged in as {this.props.username}
                    </Text>
                </View>

                {rows.map(this._createRow)}
            </View>
        );
    }

    _onPressCategoryList() {
        this.props.onPressCategoryList(this.props.navigator);
    }

    _renderNavigation() {
        const rows = [
            ['Search', this._todo],
            ['Categories', this._onPressCategoryList.bind(this)],
            ['Recent discussions', this._todo],
            ['Activity', this._todo],
            ["Who's online", this._todo],
        ];

        return rows.map(this._createRow);
    }

    _renderAccount() {
        if (this.props.username) {
            return this._renderAccountUser();
        } else {
            return this._renderAccountGuest();
        }
    }

    _renderDevelopment() {
        return (
            <View style={Styles.viewDialogRow}>
                <View style={Styles.viewDialogLabel}>
                    <Text style={Styles.textDialogItem}>
                        Server
                    </Text>
                </View>

                <View style={Styles.viewDialogField}>
                    <Picker
                        style={Styles.pickerDialog}
                        selectedValue={this.props.serverDomain}
                        onValueChange={this.props.onServerDomainChange}
                    >
                        <Picker.Item label='Mock' value='' />
                        <Picker.Item label='forums.xamarin.com' value='forums.xamarin.com' />
                        <Picker.Item label='fretboard.nick-long.com' value='fretboard.nick-long.com' />
                    </Picker>
                </View>
            </View>
        )
    }

    renderBody() {
        return (
            <ScrollView style={Styles.scrollViewDialog}>
                <View style={[Styles.viewContainer, Styles.viewMargin]}>
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

