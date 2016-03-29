/**
 * Constants.js
 */

'use strict';

const API = {
    MOCK: 0,
    VANILLA_HOSTED: 1,
    VANILLA_OPEN: 2,
};

const SERVER_ID = {
    MOCK: 0,
    XAMARIN: 1,
    FRETBOARD_DEV: 2,
};

const SERVER = {
    MOCK: {
        name: 'Mock',
        api: API.MOCK,
    },

    XAMARIN: {
        name: 'Xamarin',
        domain: 'forums.xamarin.com',
        api: API.VANILLA_HOSTED,
    },

    FRETBOARD_DEV: {
        name: 'theFretBoard (dev server)',
        domain: 'fretboard.nick-long.com',
        api: API.VANILLA_OPEN,
    },
};

//const SERVER_DEFAULT = SERVER.FRETBOARD_DEV;
const SERVER_DEFAULT = SERVER.XAMARIN;

module.exports = {
    API: API,
    SERVER: SERVER,
    SERVER_DEFAULT: SERVER_DEFAULT,
};
