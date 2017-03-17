import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

export default class ProtagonistForm extends Component {

    constructor() {
        super();

        this.state = {

            newElement: {
                name: "",
                tribu: ""
            }
        };
    }

    changeNewElementName(value) {

        const newElement = {
            name: value,
            tribu: this.state.newElement.tribu
        };

        this.setState({
            newElement: newElement
        });
    }

    changeNewElementTribu(value) {

        const newElement = {
            name: this.state.newElement.name,
            tribu: value
        };

        this.setState({
            newElement: newElement
        });
    }

    submitFormElement() {

        this.props.onAddElement(this.state.newElement);

        this.setState({
            newElement: {
                name: "",
                tribu: ""
            }
        });
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Name</Text>
                    <TextInput value={this.state.newElement.name} onChangeText={this.changeNewElementName.bind(this)} />
                </View>

                <View>
                    <Text>Tribu</Text>
                    <TextInput value={this.state.newElement.tribu} onChangeText={this.changeNewElementTribu.bind(this)} />
                </View>

                <Button title="Ajouter" onPress={this.submitFormElement.bind(this)} />
            </View>
        )
    }
}
