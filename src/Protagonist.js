import React, { Component, PropTypes } from 'react';
import exportedStyles from './styles';

import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class Protagonist extends Component {

    constructor() {

        super();

        this.state = {
            clicked: "unstroked"
        };
    }

    strokeElement() {

        if(this.state.clicked === "unstroked") {

            return this.setState({
                clicked: "stroked"
            });
        }

        return this.setState({
            clicked: "unstroked"
        });
    }

    getStyle() {

        if(this.state.clicked === "stroked") {
            return styles.stroked;
        }

        return styles.unstroked;
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.strokeElement.bind(this)}>
                    <Text style={this.getStyle.bind(this)}>
                        Hello, My name is { this.props.name }, I am a { this.props.tribu } !
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

Protagonist.propTypes = {
    tribu: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

const styles = exportedStyles;
