import React, { Component, PropTypes } from 'react';

import { View, Button } from 'react-native';

export default class Filters extends Component {

    getFilterClass(value) {
        return this.props.activeFilter.toLowerCase() === value.toLowerCase() ? "red" : 'blue';
    }

    updateFilter(value) {
        this.props.onChangeFilter(value);
    }

    render() {
        return (
            <View className="filters">
                {this.props.elements.map((element) => {
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

Filters.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
};
