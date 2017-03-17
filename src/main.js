import React, { Component, PropTypes } from 'react';
import exportedStyles from './styles';
import Protagonist from './Protagonist';
import ProtagonistForm from './ProtagonistForm';
import Filters from './Filters';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
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

            currentFilter: 'goron'
        };
    }

    selectFilter(value) {

        this.setState({
            currentFilter: value
        });
    }

    addElement(element) {

        this.state.elements.push({
            name: element.name,
            tribu: element.tribu
        });

        this.setState({
            elements: this.state.elements
        });
    }

    processFilter(element) {

        if(this.state.currentFilter === "none") {
            return true;
        } else if(element.tribu.toLowerCase() === this.state.currentFilter.toLowerCase()) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <View style={styles.container}>

                {/*<Image source={require('./src/logo.svg')} />*/}

                <Filters activeFilter={this.state.currentFilter} onChangeFilter={this.selectFilter.bind(this)}></Filters>
                <ProtagonistForm onAddElement={this.addElement.bind(this)}></ProtagonistForm>

                {this.state.elements.map((element, index) => {

                    let isInFilter = this.processFilter(element);

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
