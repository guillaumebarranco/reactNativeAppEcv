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

        this.setState({
            newElement: {
                name: value,
                tribu: this.state.newElement.tribu
            }
        });
    }

    changeNewElementTribu(value) {

        this.setState({
            newElement: {
                name: this.state.newElement.name,
                tribu: value
            }
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

ProtagonistForm.propTypes = {
    onAddElement: PropTypes.func.isRequired
};
