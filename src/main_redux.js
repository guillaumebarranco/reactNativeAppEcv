import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import exportedStyles from './styles';
import MainAppContainer from './containers/MainAppContainer';

import store from './store';

import {
    Text,
    View,
} from 'react-native';

export default class reactNativeApp extends Component {

	render() {

		return (
			<View style={styles.container}>
				<Provider store={store}>
					<MainAppContainer></MainAppContainer>
				</Provider>
			</View>
		);
	}
}

const styles = exportedStyles;
