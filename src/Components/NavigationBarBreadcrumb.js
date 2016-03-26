/**
 * NavigationBarBreadcrumb
 */

'use strict';

import React, {
    Component,
    Navigator,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Styles = require('../Styles');

var BreadcrumbRouteMapper = {
    rightContentForRoute(route, navigator) {
        return null;
    },

    titleContentForRoute(route, navigator) {
        return (
            <Text style={Styles.navText}>
                {route.title}
            </Text>
        );
    },

    iconForRoute(route, navigator) {
        return null;
    },

    separatorForRoute(route, navigator) {
        return (
            <TouchableOpacity
                onPress={navigator.pop}
                style={Styles.crumbSeparatorPlaceholder}
            >
                <Text style={Styles.navText}>
                    &gt;
                </Text>
            </TouchableOpacity>
        );
    }
};

var RouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if (index == 0) {
            return null;
        }

        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
            >
                <Text style={Styles.navText}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton(route, navigator, index, navState) {
        return null;
    },

    Title(route, navigator, index, navState) {
        return (
            <Text style={Styles.navText}>
                {route.title}
            </Text>
        );
    }
};

module.exports = (
    <Navigator.BreadcrumbNavigationBar
        style={Styles.navbar}
        routeMapper={BreadcrumbRouteMapper} />
);

//module.exports = (
//    <Navigator.NavigationBar
//        style={Styles.navbar}
//        routeMapper={RouteMapper} />
//);


