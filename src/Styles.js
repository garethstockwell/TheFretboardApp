/**
 * Styles.js
 */

'use strict';

import React, {
    StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

var COLOR = {
        TRANSPARENT:               'rgba(0,0,0,0)',

        BLACK:                     '#000000',
        GRAY_01:                   '#373B3F',
        GRAY_02:                   '#999DA2',
        WHITE:                     '#FFFFFF',

        BLUE_DARK:                 '#2C3E50',
        BLUE_MID:                  '#2980B9',
        BLUE_LIGHT:                '#3498DB',

        GOLD:                      '#F1C40F',

        PURPLE:                    '#9B59B6',

        RED:                       '#FF0000',
};

var DIM = {
        MARGIN_VIEW:               5,

        INDENT:                    20,

        MARGIN_LOGIN:              10,
        HEIGHT_LOGIN_TITLE:        100,
        HEIGHT_LOGIN_STATUS:       50,
        HEIGHT_LOGIN_FORM:         200,
        WIDTH_LOGIN_LABEL:         120,
        SEP_LOGIN_ITEM:            20,
        HEIGHT_LOGIN_FIELD:        50,
        WIDTH_LOGIN_DIVIDER:       2,
        WIDTH_LOGIN_SWITCH:        50,

        HEIGHT_NAVBAR:             50,
        NAVBAR_BUTTON:             50,
        NAVBAR_ICON:               40,

        HEIGHT_TOOLBAR:            50,

        WIDTH_DIALOG_DIVIDER:      2,
        SEP_DIALOG_SECTION:        20,
        SEP_DIALOG_ITEM:           10,

        PADDING_BUTTON:            5,
        BORDER_WIDTH_BUTTON:       1,
        BORDER_RADIUS_BUTTON:      5,
        MARGIN_BUTTON:             20,
        WIDTH_BUTTON:              150,

        WIDTH_NAV_BUTTON:          50,

        HEIGHT_LIST_SEP:           1,
        WIDTH_LIST_MARGIN:         0,
        PADDING_LIST:              5,
};

var FONT_FAMILY = 'Lato';

var FONT_SIZE = {
        LOGIN_TITLE:               32,
        LOGIN_STATUS:              18,
        LOGIN_LABEL:               18,

        NAVBAR_TITLE:              20,
        NAVBAR_BUTTON:             16,

        DIALOG_HEADING:            16,
        DIALOG_ITEM:               14,

        BUTTON:                    16,

        PAGE_BAR:                  16,

        LIST_ITEM:                 16,
        LIST_SECTION_HEADING:      16,
};

const styles = StyleSheet.create({
    /*
     * Misc
     */

    viewSpinner: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    switch: {

    },

    viewContainer: {
        flex: 1,
    },

    viewMargin: {
        margin: DIM.MARGIN_VIEW,
    },

    viewCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    /*
     * SceneLogin
     */

    viewLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.BLUE_MID,
    },

    viewLoginTitle: {
        height: DIM.HEIGHT_LOGIN_TITLE,
        margin: DIM.MARGIN_LOGIN,
        borderBottomColor: COLOR.WHITE,
        //borderBottomWidth: DIM.WIDTH_LOGIN_DIVIDER,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageLoginTitle: {
        flex: 1,
        height: DIM.HEIGHT_LOGIN_TITLE,
        width: Dimensions.get('window').width - 2 * DIM.MARGIN_LOGIN,
    },

    viewLoginBody: {
        flex: 1,
        margin: DIM.MARGIN_LOGIN,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },

    viewLoginStatus: {
        height: DIM.HEIGHT_LOGIN_STATUS,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewLoginForm: {
        height: DIM.HEIGHT_LOGIN_FORM,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    viewLoginFormRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textLoginTitle: {
        color: COLOR.WHITE,
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.LOGIN_TITLE,
    },

    textLoginStatus: {
        color: COLOR.WHITE,
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.LOGIN_STATUS,
    },

    viewLoginLabel: {
        justifyContent: 'center',
        marginRight: DIM.SEP_LOGIN_ITEM,
    },

    viewLoginField: {
        flex: 1,
        justifyContent: 'center',
        height: DIM.HEIGHT_LOGIN_FIELD,
    },

    viewLoginSwitch: {
        width: DIM.WIDTH_LOGIN_SWITCH,
        marginTop: DIM.SEP_LOGIN_ITEM,
        height: DIM.HEIGHT_LOGIN_FIELD,
        justifyContent: 'center',
    },

    textLoginLabel: {
        color: COLOR.WHITE,
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.LOGIN_LABEL,
        textAlign: 'right',
        width: DIM.WIDTH_LOGIN_LABEL,
    },

    textInputLogin: {
        color: COLOR.WHITE,
    },

    buttonLogin: {
        flex: 1,
        marginTop: DIM.MARGIN_BUTTON,
    },

    /*
     * NavigatorBar
     */

     viewNavbar: {
         position: 'absolute',
         top: 0,
         height: DIM.HEIGHT_NAVBAR,
         width: Dimensions.get('window').width,
         backgroundColor: COLOR.BLUE_DARK,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
     },

     viewNavbarButton: {
         height: DIM.NAVBAR_BUTTON,
         width: DIM.NAVBAR_BUTTON,
         alignSelf: 'stretch',
         alignItems: 'center',
         justifyContent: 'center',
         //borderWidth: DIM.BORDER_WIDTH_BUTTON,
         //borderColor: COLOR.WHITE,
     },

     imageNavbar: {
         height: DIM.NAVBAR_ICON,
         width: DIM.NAVBAR_ICON,
     },

     viewNavbarTitle: {
         flex: 1,
         alignSelf: 'stretch',
         alignItems: 'center',
         justifyContent: 'center',
     },

     // Temporary, until we have icons
     textNavbarButton: {
         color: COLOR.WHITE,
         fontFamily: FONT_FAMILY,
         fontSize: FONT_SIZE.NAVBAR_BUTTON,
     },

     textNavbarTitle: {
         color: COLOR.WHITE,
         fontFamily: FONT_FAMILY,
         fontSize: FONT_SIZE.NAVBAR_TITLE,
     },

    /*
     * Toolbar
     */

     viewToolbar: {
         alignSelf: 'stretch',
         flexDirection: 'row',
         height: DIM.HEIGHT_TOOLBAR,
         borderTopColor: COLOR.WHITE,
         borderTopWidth: DIM.WIDTH_LOGIN_DIVIDER,
     },

     viewButton: {

     },

     textButton: {
         color: COLOR.WHITE,
         fontFamily: FONT_FAMILY,
         fontSize: FONT_SIZE.BUTTON,
         textAlign: 'center',
     },

    /*
     * Scene
     */

     viewSceneBody: {
         flex: 1,
         marginTop: DIM.HEIGHT_NAVBAR,
     },

     viewSceneSpinner: {
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         alignItems: 'center',
         backgroundColor: COLOR.BLUE_DARK,
         justifyContent: 'center',
     },

    /*
     * SceneDialog
     */

    scrollViewDialog: {
        flex: 1,
        backgroundColor: COLOR.BLUE_DARK,
        alignSelf: 'stretch',
    },

    viewDialogHeading: {
        flex: 1,
        borderBottomColor: COLOR.GRAY_02,
        borderBottomWidth: DIM.WIDTH_DIALOG_DIVIDER,
    },

    textDialogHeading: {
        color: COLOR.GRAY_02,
        fontWeight: 'bold',
        fontSize: FONT_SIZE.DIALOG_HEADING,
        textAlign: 'left',
    },

    viewDialogRow: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: DIM.INDENT,
        marginTop: DIM.SEP_DIALOG_ITEM,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    textDialogItem: {
        color: COLOR.GRAY_02,
        fontSize: FONT_SIZE.DIALOG_ITEM,
        fontStyle: 'italic',
        textAlign: 'left',
    },

    viewDialogSectionSpacer: {
        flex: 1,
        alignSelf: 'stretch',
        height: DIM.SEP_DIALOG_SECTION,
    },

    pickerDialog: {
        flex: 1,
        color: COLOR.WHITE,
    },

    viewDialogLabel: {
        justifyContent: 'center',
        marginRight: DIM.SEP_DIALOG_ITEM,
    },

    viewDialogField: {
        flex: 1,
        justifyContent: 'center',
    },

    viewButtonDialog: {
        flex: 1,
    },

    textButtonDialog: {
        flex: 1,
        textAlign: 'left',
    },

    /*
     * PageBar
     */

    viewPageBarLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: DIM.WIDTH_NAV_BUTTON,
    },

    viewPageBarCenter: {
        flex: 1,
        alignItems: 'center',
    },

    viewPageBarRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: DIM.WIDTH_NAV_BUTTON,
    },

    textPageBar: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE.PAGE_BAR,
        fontWeight: 'bold',
    },

    /*
     * ListView item
     */

    viewListItem: {
        backgroundColor: COLOR.WHITE,
        borderWidth: 0,
        marginHorizontal: DIM.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM.HEIGHT_LIST_SEP,
        padding: DIM.PADDING_LIST,
    },

    textListItem: {
        color: COLOR.BLUE_DARK,
        fontSize: FONT_SIZE.LIST_ITEM,
    },

    viewListItemPageBar: {
        backgroundColor: COLOR.BLUE_MID,
        borderWidth: 0,
        marginHorizontal: DIM.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM.HEIGHT_LIST_SEP,
        padding: DIM.PADDING_LIST,
        height: DIM.HEIGHT_PAGE_BAR,
    },

    viewListSectionHeading: {
        backgroundColor: COLOR.BLUE_MID,
        borderWidth: 0,
        marginHorizontal: DIM.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM.HEIGHT_LIST_SEP,
        padding: DIM.PADDING_LIST,
        height: DIM.HEIGHT_PAGE_BAR,
    },

    textListSectionHeading: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE.LIST_SECTION_HEADING,
        fontWeight: 'bold',
    },
});

module.exports = styles;
