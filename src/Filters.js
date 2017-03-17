import React, { Component, PropTypes } from 'react';

import {
    View,
    Button
} from 'react-native';

export default class Filters extends Component {

    constructor() {
        super();

        this.state = {

            tribus: [
                {
                    slug:"none",
                    title: "Tous"
                }, 
                {
                    slug:"goron",
                    title: "Goron"
                }, 
                {
                    slug:"zora",
                    title: "Zora"
                }
            ]
        };
    }

    getFilterClass(value) {
        return this.props.activeFilter.toLowerCase() === value.toLowerCase() ? "red" : 'blue';
    }

    updateFilter(value) {
        console.log('enfant', value);
        this.props.onChangeFilter(value);
    }

    render() {
        return (
            <View className="filters">
                {this.state.tribus.map((element) => {
                    return (
                        <Button
                            key={element.title}
                            title={element.title}
                            color={this.getFilterClass(element.slug)}
                            onPress={this.updateFilter.bind(this, element.slug)}
                        />
                    );
                })}
            </View>
        )
    }
}
