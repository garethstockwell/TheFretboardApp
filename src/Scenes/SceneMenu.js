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
    createRow(data) {
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

    onUnconnected() {
        console.log('TODO: connect up this button');
    }

    renderHeading(text) {
        return (
            <View style={Styles.viewDialogHeading}>
                <Text style={Styles.textDialogHeading}>
                    {text}
                </Text>
            </View>
        );
    }

    renderSpacer() {
        return (
            <View style={Styles.viewDialogSectionSpacer} />
        );
    }

    renderAccountGuest() {
        const rows = [
            ['Log in', this.props.onPressLogOut],
        ];

        // TODO: maintain route stack when logging in
        return (
            <View style={Styles.viewContainer}>
                <View style={Styles.viewDialogRow}>
                    <View style={Styles.viewContainer}>
                        <Text style={Styles.textDialogItem}>
                            Not logged in
                        </Text>
                    </View>
                </View>

                {rows.map(this.createRow)}
            </View>
        );
    }

    renderAccountUser() {
        const rows = [
            ['Log out', this.props.onPressLogOut],
            ['Bookmarks', this.onUnconnected],
            ['Notifications', this.onUnconnected],
            ['Messages', this.onUnconnected],
            ['My discussions', this.onUnconnected],
            ['My drafts', this.onUnconnected],
        ];

        // TODO: maintain route stack when logging out
        return (
            <View style={Styles.viewContainer}>
                <View style={Styles.viewDialogRow}>
                    <Text style={Styles.textDialogItem}>
                        Logged in as {this.props.username}
                    </Text>
                </View>

                {rows.map(this.createRow)}
            </View>
        );
    }

    onPressCategoryList() {
        this.props.onPressCategoryList(this.props.navigator);
    }

    renderNavigation() {
        const rows = [
            ['Search', this.onUnconnected],
            ['Categories', this.onPressCategoryList.bind(this)],
            ['Recent discussions', this.onUnconnected],
            ['Activity', this.onUnconnected],
            ["Who's online", this.onUnconnected],
        ];

        return rows.map(this.createRow);
    }

    renderAccount() {
        if (this.props.username) {
            return this.renderAccountUser();
        } else {
            return this.renderAccountGuest();
        }
    }

    renderDevelopment() {
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
                    {this.renderHeading('Navigation')}
                    {this.renderNavigation()}

                    {this.renderSpacer()}

                    {this.renderHeading('Account')}
                    {this.renderAccount()}

                    {this.renderSpacer()}

                    {this.renderHeading('Development')}
                    {this.renderDevelopment()}
                </View>
            </ScrollView>
        );
    }
}

module.exports = SceneMenu;

