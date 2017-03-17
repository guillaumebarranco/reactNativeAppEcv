import React, { Component } from 'react';
import Protagonist from './../Protagonist';
import ProtagonistForm from './../ProtagonistForm';
import Filters from './../Filters';
import exportedStyles from './../styles';

import {
    Text,
    View,
} from 'react-native';

export default class MainApp extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>

                <Filters
                    activeFilter={this.props.filters.currentFilter}
                    elements={this.props.filters.elements}
                    onChangeFilter={this.props.selectFilter}
                />

                <ProtagonistForm onAddElement={this.props.addElement}></ProtagonistForm>

                {this.props.protagonists.map((element, index) => {

                    let isInFilter = false;

                    if(this.props.filters.currentFilter === "none") {
                        isInFilter = true;
                    } else if(element.tribu.toLowerCase() === this.props.filters.currentFilter.toLowerCase()) {
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
