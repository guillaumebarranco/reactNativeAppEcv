/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component, PropTypes } from 'react';

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

class Protagonist extends Component {

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

            filters: "none"
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

    selectFilter(value) {

        this.setState({
            filters: value
        });
    }

    getFilterClass(value) 
    {
        return this.state.filters.toLowerCase() === value.toLowerCase() ? "red" : 'blue';
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

                <View className="filters">
                    <Button title="Tous" color={this.getFilterClass("none")} onPress={this.selectFilter.bind(this, "none")} />
                    <Button title="Goron" color={this.getFilterClass("goron")} onPress={this.selectFilter.bind(this, "goron")} />
                    <Button title="Zora" color={this.getFilterClass("zora")} onPress={this.selectFilter.bind(this, "zora")} />
                </View>

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

                    return <Protagonist key={element.name} style={styles.welcome} name={element.name} tribu={element.tribu} />;
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    stroked: {
        textDecorationLine: 'line-through'
    },
    unstroked: {
        textDecorationLine: 'none'
    },
    active: {
        backgroundColor: 'red'
    },
    notactive: {
        backgroundColor: 'yellow'
    }
});

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);
