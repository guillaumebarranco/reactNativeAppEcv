import {
    StyleSheet
} from 'react-native';

const exportedStyles = StyleSheet.create({
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

export default exportedStyles;
