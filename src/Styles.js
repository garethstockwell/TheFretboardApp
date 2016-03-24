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
        SPLASH:                    32,
        NAVBAR:                    16,

        LOGIN_LABEL:               18,

        BUTTON:                    22,

        TITLE:                     16,
};

const styles = StyleSheet.create({
    frontPage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        backgroundColor: COLOR.BLUE_MID,
        //justifyContent: 'center',
    },

    frontPageTitleView: {
        marginTop: DIM.HEIGHT_NAVBAR,
        alignItems: 'center',
    },

    frontPageTitleText: {
        color: COLOR.WHITE,
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.SPLASH,
    },

    loginView: {
        //backgroundColor: COLOR.RED,
        marginTop: DIM.MARGIN_LOGIN,
        marginBottom: DIM.MARGIN_LOGIN,
        flex: 1,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginLabelText: {
        color: COLOR.WHITE,
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.LOGIN_LABEL,
    },

    loginTextInput: {
        margin: DIM.MARGIN_LOGIN_TEXT_INPUT,
        height: DIM.HEIGHT_LOGIN_TEXT_INPUT,
        backgroundColor: COLOR.WHITE,
    },

    button: {
        margin: DIM.MARGIN_BUTTON,
        borderColor: COLOR.WHITE,
        borderWidth: 2,
        borderRadius: 10,
    },

    buttonText: {
        color: COLOR.WHITE,
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.BUTTON,
        margin: 5,
    },

    frontPageSpinner: {
        backgroundColor: COLOR.TRANSPARENT,
        marginTop: DIM.MARGIN_SPINNER,
        height: DIM.HEIGHT_SPINNER,
    },

    navbar: {
        backgroundColor: COLOR.BLUE_DARK,
        position: 'absolute',
        top: 0,
    },

    body: {
        flex: 1,
        marginTop: DIM.HEIGHT_NAVBAR,
    },

    container: {
        alignItems: 'center',
        backgroundColor: COLOR.GRAY_02,
        flex: 1,
        justifyContent: 'center',
    },

    listview: {
        flex: 1,
        alignSelf: 'stretch',
    },

    li: {
        backgroundColor: COLOR.WHITE,
        borderWidth: 0,
        marginLeft: DIM.WIDTH_LIST_MARGIN,
        marginRight: DIM.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM.HEIGHT_LIST_SEP,
        padding: DIM.PADDING_LIST,
    },

    liText: {
        color: COLOR.BLUE_DARK,
        fontSize: FONT_SIZE.TITLE,
    },

    liSectionHeading: {
        backgroundColor: COLOR.BLUE_MID,
        borderWidth: 0,
        marginLeft: DIM.WIDTH_LIST_MARGIN,
        marginRight: DIM.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM.HEIGHT_LIST_SEP,
        padding: DIM.PADDING_LIST,
        height: DIM.HEIGHT_PAGE_BAR,
    },

    liSectionHeadingText: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE.TITLE,
        fontWeight: 'bold',
    },

    liPageBar: {
        backgroundColor: COLOR.BLUE_MID,
        borderWidth: 0,
        marginLeft: DIM.WIDTH_LIST_MARGIN,
        marginRight: DIM.WIDTH_LIST_MARGIN,
        marginTop: 0,
        marginBottom: DIM.HEIGHT_LIST_SEP,
        padding: DIM.PADDING_LIST,
        height: DIM.HEIGHT_PAGE_BAR,
    },

    liPageBarText: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE.TITLE,
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
        fontSize: FONT_SIZE.TITLE,
    },

    titleView: {
        height: 2 * DIM.HEIGHT_NAVBAR,
        backgroundColor: COLOR.BLUE_MID,
        alignItems: 'center',
    },

    titleText: {
        color: COLOR.WHITE,
        fontSize: FONT_SIZE.TITLE,
        fontWeight: 'bold',
    },

    todoText: {
        color: COLOR.RED,
        fontSize: FONT_SIZE.TITLE,
        fontWeight: 'bold',
    },

    pageBarLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: DIM.NAV_BUTTON,
    },

    pageBarCenter: {
        flex: 1,
        alignItems: 'center',
    },

    pageBarRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: DIM.NAV_BUTTON,
    },
});

module.exports = styles;

