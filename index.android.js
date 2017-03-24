import React, { Component, PropTypes } from 'react';
import reactNativeApp from './src/main_redux';

import { AppRegistry } from 'react-native';

// DO NOT COMMIT TO PROD
const NETWORK_DEBUG = true;

if(NETWORK_DEBUG) {

	const xhr = global.originalXMLHttpRequest ?
		global.originalXMLHttpRequest :
		global.XMLHttpRequest;

	global.XMLHttpRequest = xhr;
}

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);
