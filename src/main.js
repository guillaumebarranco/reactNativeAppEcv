import React, { Component, PropTypes } from 'react';
import exportedStyles from './styles';
import Protagonist from './Protagonist';
import Filters from './Filters';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Button,
    TextInput
} from 'react-native';

export default class reactNativeApp extends Component {

    constructor() {

        super();

        this.state = {

            elements: [
                {
                    name: 'Daruma',
                    tribu: 'Goron'
                }, {
                    name:'Jabu-Jabu',
                    tribu: 'Zora'
                }, {
                    name: 'Mido',
                    tribu: "Kokiri"
                }
            ],

            newElement: {
                name: "",
                tribu: ""
            },

            filters: 'goron'
        };
    }

    selectFilter(value) {

        this.setState({
            filters: value
        });
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

    addElement() {

        this.state.elements.push({
            name: this.state.newElement.name,
            tribu: this.state.newElement.tribu
        });

        this.setState({
            elements: this.state.elements,
            newElement: {
                name: "",
                tribu: ""
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>

                {/*<Image source={require('./src/logo.svg')} />*/}

                <Filters activeFilter={this.state.filters} onChangeFilter={this.selectFilter.bind(this)}></Filters>

                <View>
                    <Text>Name</Text>
                    <TextInput value={this.state.newElement.name} onChangeText={this.changeNewElementName.bind(this)} />
                </View>

                <View>
                    <Text>Tribu</Text>
                    <TextInput value={this.state.newElement.tribu} onChangeText={this.changeNewElementTribu.bind(this)} />
                </View>

                <Button title="Ajouter" onPress={this.addElement.bind(this)} />

                {this.state.elements.map((element, index) => {

                    let isInFilter = false;

                    if(this.state.filters === "none") {
                        isInFilter = true;
                    } else if(element.tribu.toLowerCase() === this.state.filters.toLowerCase()) {
                        isInFilter = true;
                    }

                    if(!isInFilter) {
                        return null;
                    }

                    return (
                        <Protagonist
                            key={element.name}
                            style={styles.welcome}
                            name={element.name}
                            tribu={element.tribu}
                        />
                    );
                })}
            </View>
        );
    }
}

const styles = exportedStyles;
