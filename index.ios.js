var React = require('react-native');
var _ = require('lodash');

var GlobalConfig = require('./global_config');
var Tile = require('./components/tile');

var {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = React;

var Stage = React.createClass({
    getInitialState() {
        return {
            tile: {
                value: [3, 4],
                orientation: GlobalConfig.TILE_ORIENTATION.VERTICAL
            }
        };
    },
    _handleRandomButtonPress() {
        var range = (GlobalConfig.TILE_PIPS.MAX - GlobalConfig.TILE_PIPS.MIN);
        var val1 = Math.floor(Math.random() * range + GlobalConfig.TILE_PIPS.MIN);
        var val2 = Math.floor(Math.random() * range + GlobalConfig.TILE_PIPS.MIN);
        var orientation = Math.floor(Math.random() * 2) === 1 ?
            GlobalConfig.TILE_ORIENTATION.VERTICAL :
            GlobalConfig.TILE_ORIENTATION.HORIZONTAL;

        this.setState({
            tile: {
                orientation,
                value: [val1, val2]
            }
        });
    },
    _handleDropButtonPress() {
        alert('drop');
    },
    renderRandomButton() {
        return (
            <TouchableHighlight onPress={this._handleRandomButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>Randomize</Text>
            </TouchableHighlight>
        );
    },
    renderDropButton() {
        return (
            <TouchableHighlight onPress={this._handleDropButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>Drop</Text>
            </TouchableHighlight>
        );
    },
    render() {
        return (
            <View style={styles.stage}>
                <View style={styles.leftStage}>
                    <Tile value={this.state.tile.value} orientation={this.state.tile.orientation} />
                </View>
                <View style={styles.rightStage}>
                    {this.renderRandomButton()}
                    {this.renderDropButton()}
                </View>
            </View>
        );
    }
});

var Board = React.createClass({
    render() {
        return (
            <View style={styles.board}>

            </View>
        );
    }
});

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
    },
    stage: {
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        width: 200
    },
    leftStage: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center'
    },
    rightStage: {
        borderWidth: 1,
        justifyContent: 'center',
        width: 90
    },
    board: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
        height: 400,
        width: 200
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center',
        width: 60
    },
    buttonText: {
        color: 'black',
        fontSize: 10
    },
});

AppRegistry.registerComponent('DrDomino', () => DrDomino);
