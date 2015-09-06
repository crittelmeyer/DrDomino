var React = require('react-native');

var Stage = require('./components/game/stage');
var Board = require('./components/game/board');

var {
    View,
    Text,
    StyleSheet,
    AppRegistry
} = React;

var DrDomino = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Dr. Domino</Text>

                <Stage />

                <Board msg="test" />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

AppRegistry.registerComponent('DrDomino', () => DrDomino);
