/**
 * Styles.js
 */

'use strict';

import React, {
    StyleSheet,
} from 'react-native';

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
        HEIGHT_LOGIN_TITLE:        100,
        HEIGHT_LOGIN_STATUS:       50,
        HEIGHT_LOGIN_SPINNER:      200,

        MARGIN_FORM_ROW:           10,

        HEIGHT_TOOLBAR:            50,

        PADDING_BUTTON:            5,
        BORDER_WIDTH_BUTTON:       1,
        BORDER_RADIUS_BUTTON:      5,
        MARGIN_BUTTON:             20,
        WIDTH_BUTTON:              150,
};

var DIM_LEGACY = {
        MARGIN_SPINNER:            50,
        HEIGHT_SPINNER:            150,

        HEIGHT_NAVBAR:             50,
        HEIGHT_PAGEBAR:            50,

        MARGIN_LOGIN:              30,
        HEIGHT_LOGIN_TEXT_INPUT:   50,
        MARGIN_LOGIN_TEXT_INPUT:   10,

        HEIGHT_LIST_SEP:           1,
        WIDTH_LIST_MARGIN:         0,
        PADDING_LIST:              5,

        MARGIN_BUTTON:             5,

        NAV_BUTTON:                50,
};

var FONT_FAMILY = 'Lato';

var FONT_SIZE = {
        LOGIN_TITLE:               32,
        LOGIN_STATUS:              18,
        LOGIN_LABEL:               18,

        BUTTON:                    22,
};

var FONT_SIZE_LEGACY = {
        SPLASH:                    32,
        NAVBAR:                    16,

        LOGIN_LABEL:               18,

        BUTTON:                    22,

        TITLE:                     16,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignItems: 'center',
    },

    viewLoginBody: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },

    viewLoginStatus: {
        height: DIM.HEIGHT_LOGIN_STATUS,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewLoginForm: {
        backgroundColor: '#ffff00',
        flex: 1,
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

    viewLoginSpinner: {
        height: DIM.HEIGHT_LOGIN_SPINNER
    },

    viewLoginLabel: {
        width: 200,
        backgroundColor: '#888888',
    },

    viewLoginTextInput: {
        flex: 1,
    },

    textLoginLabel: {
        color: COLOR.WHITE,
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.LOGIN_LABEL,
        width: 100,
    },

    textInputLogin: {
        margin: DIM_LEGACY.MARGIN_LOGIN_TEXT_INPUT,
        height: DIM_LEGACY.HEIGHT_LOGIN_TEXT_INPUT,
        backgroundColor: COLOR.WHITE,
    },

    /*
     * Forms
     */

     viewFormRow: {
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#ff0000',
         marginTop: DIM.MARGIN_FORM_ROW,
     },

    /*
     * Toolbar
     */

     viewToolbar: {
         backgroundColor: '#00ff00',
         flexDirection: 'row',
         height: DIM.HEIGHT_TOOLBAR,
         justifyContent: 'center',
         alignItems: 'stretch',
     },

     viewButton: {
         width: DIM.WIDTH_BUTTON,
         padding: DIM.PADDING_BUTTON,
         backgroundColor: COLOR.TRANSPARENT,
         borderColor: COLOR.WHITE,
         borderWidth: DIM.BORDER_WIDTH_BUTTON,
         borderRadius: DIM.BORDER_RADIUS_BUTTON,
         marginLeft: DIM.MARGIN_BUTTON,
         marginRight: DIM.MARGIN_BUTTON,
     },

     textButton: {
         color: COLOR.WHITE,
         fontFamily: FONT_FAMILY,
         fontSize: FONT_SIZE.BUTTON,
         textAlign: 'center',
     },

    /*
     * Legacy
     */

    navbar: {
        backgroundColor: COLOR.BLUE_DARK,
        position: 'absolute',
        top: 0,
    },

    body: {
        flex: 1,
        marginTop: DIM_LEGACY.HEIGHT_NAVBAR,
    },

    listview: {
        flex: 1,
        alignSelf: 'stretch',
    },

    li: {
        backgroundColor: COLOR.WHITE,
        borderWidth: 0,
        marginLeft: DIM_LEGACY.WIDTH_LIST_MARGIN,
        marginRight: DIM_LEGACY.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM_LEGACY.HEIGHT_LIST_SEP,
        padding: DIM_LEGACY.PADDING_LIST,
    },

    liText: {
        color: COLOR.BLUE_DARK,
        fontSize: FONT_SIZE_LEGACY.TITLE,
    },

    liSectionHeading: {
        backgroundColor: COLOR.BLUE_MID,
        borderWidth: 0,
        marginLeft: DIM_LEGACY.WIDTH_LIST_MARGIN,
        marginRight: DIM_LEGACY.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM_LEGACY.HEIGHT_LIST_SEP,
        padding: DIM_LEGACY.PADDING_LIST,
        height: DIM_LEGACY.HEIGHT_PAGE_BAR,
    },

    liSectionHeadingText: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE_LEGACY.TITLE,
        fontWeight: 'bold',
    },

    liPageBar: {
        backgroundColor: COLOR.BLUE_MID,
        borderWidth: 0,
        marginLeft: DIM_LEGACY.WIDTH_LIST_MARGIN,
        marginRight: DIM_LEGACY.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM_LEGACY.HEIGHT_LIST_SEP,
        padding: DIM_LEGACY.PADDING_LIST,
        height: DIM_LEGACY.HEIGHT_PAGE_BAR,
    },

    liPageBarText: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE_LEGACY.TITLE,
        fontWeight: 'bold',
    },

    spinnerView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        backgroundColor: COLOR.BLUE_DARK,
        justifyContent: 'center',
    },

    spinner: {
        flex: 1,
    },

    navText: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE_LEGACY.TITLE,
    },

    titleView: {
        height: 2 * DIM_LEGACY.HEIGHT_NAVBAR,
        backgroundColor: COLOR.BLUE_MID,
        alignItems: 'center',
    },

    titleText: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE_LEGACY.TITLE,
        fontWeight: 'bold',
    },

    todoText: {
        color: COLOR.RED,
        fontSize: FONT_SIZE_LEGACY.TITLE,
        fontWeight: 'bold',
    },

    pageBarLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: DIM_LEGACY.NAV_BUTTON,
    },

    pageBarCenter: {
        flex: 1,
        alignItems: 'center',
    },

    pageBarRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: DIM_LEGACY.NAV_BUTTON,
    },
});

module.exports = styles;
