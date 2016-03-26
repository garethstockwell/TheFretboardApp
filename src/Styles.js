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
        MARGIN_LOGIN:              10,
        HEIGHT_LOGIN_TITLE:        70,
        HEIGHT_LOGIN_STATUS:       50,
        HEIGHT_LOGIN_FORM:         200,
        WIDTH_LOGIN_LABEL:         120,
        SEP_LOGIN_ITEM:            20,
        HEIGHT_LOGIN_FIELD:        50,
        WIDTH_LOGIN_DIVIDER:       2,
        WIDTH_LOGIN_SWITCH:        50,

        HEIGHT_NAVBAR:             50,
        WIDTH_NAVBAR_BUTTON:       50,

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

        NAVBAR_TITLE:              20,
        NAVBAR_BUTTON:             16,

        BUTTON:                    20,
};

var FONT_SIZE_LEGACY = {
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
        margin: DIM.MARGIN_LOGIN,
        borderBottomColor: COLOR.WHITE,
        borderBottomWidth: DIM.WIDTH_LOGIN_DIVIDER,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
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
         width: DIM.WIDTH_NAVBAR_BUTTON,
         alignSelf: 'stretch',
         alignItems: 'center',
         justifyContent: 'center',
         borderWidth: DIM.BORDER_WIDTH_BUTTON,
         borderColor: COLOR.WHITE,
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
         flex: 1,
         marginTop: DIM.MARGIN_BUTTON,
     },

     textButton: {
         color: COLOR.WHITE,
         fontFamily: FONT_FAMILY,
         fontSize: FONT_SIZE.BUTTON,
         textAlign: 'center',
     },

    /*
     * Misc
     */

     viewSpinner: {
         height: 100,
         alignItems: 'center',
         justifyContent: 'center',
     },

     switch: {
         //backgroundColor: COLOR.RED,
         borderColor: '#ffff00',
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
        marginHorizontal: DIM_LEGACY.WIDTH_LIST_MARGIN,
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
        marginHorizontal: DIM_LEGACY.WIDTH_LIST_MARGIN,
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
        marginHorizontal: DIM_LEGACY.WIDTH_LIST_MARGIN,
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
