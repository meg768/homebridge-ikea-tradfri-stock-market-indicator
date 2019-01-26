"use strict";

var Path = require('path');

module.exports = function(homebridge) {

    // Load .env
    require('dotenv').config({path: Path.join(process.env.HOME, '.homebridge/.env')});

    homebridge.registerPlatform('homebridge-ikea-tradfri-stock-market-indicator', 'Ikea Trådfri Stock Market Indicator', require('./src/platform.js'));
};
