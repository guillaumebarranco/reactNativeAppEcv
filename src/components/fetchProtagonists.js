// High Order Component

import React, { Component } from 'react';

export default function fetchProtagonists(WrappedComponent) {

	return class extends Component {

		componentDidMount() {

			fetch('http://92.222.34.194/apireact/serveur.php').then((response) => {
				return response.json();
			}).then((results) => {
				this.props.fetchComplete(results);
			}).catch((error) => {
				this.props.fetchError(error);
			});
		}

		render() {

			return (
				<WrappedComponent {...this.props} />
			);
		}
	}
}
