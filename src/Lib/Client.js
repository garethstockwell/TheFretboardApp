/**
 * Client
 *
 * Facade over Client*.js
 */

'use strict';

const Constants = require('../Constants');

import ClientMock from './ClientMock';
import ClientVanillaHosted from './ClientVanillaHosted';
import ClientVanillaOpen from './ClientVanillaOpen';

var create = function(server) {
    switch (server.api) {
        case Constants.API.MOCK:
            return new ClientMock();

        case Constants.API.VANILLA_HOSTED:
            return new ClientVanillaHosted(server.domain);

        case Constants.API.VANILLA_OPEN:
            return new ClientVanillaOpen(server.domain);
    }
};

module.exports = {
    create: create,
};
