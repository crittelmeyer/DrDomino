var React = require('react-native');
var _ = require('lodash');

var {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = React;

const TILE_ORIENTATION = {
    VERTICAL: 'v',
    HORIZONTAL: 'h'
};

const TILE_PIPS = {
    MIN: 1,
    MAX: 6
};

var TileCell = React.createClass({
    render() {
        var pips = _.repeat('*', this.props.value);

        return (
            <View style={styles.tileCell}>
                <Text>{pips}</Text>
            </View>
        );
    }
});

var Tile = React.createClass({
    render() {
        return (
            <View style={[styles.tile, this.props.orientation === TILE_ORIENTATION.HORIZONTAL && styles.rotate]}>
                <TileCell value={this.props.value[0]} />
                <TileCell value={this.props.value[1]} />
            </View>
        );
    }
});

var Stage = React.createClass({
    getInitialState() {
        return {
            tile: {
                value: [3, 4],
                orientation: TILE_ORIENTATION.VERTICAL
            }
        };
    },
    _handleRandomButtonPress() {
        var val1 = Math.floor(Math.random() * (TILE_PIPS.MAX - TILE_PIPS.MIN) + TILE_PIPS.MIN);
        var val2 = Math.floor(Math.random() * (TILE_PIPS.MAX - TILE_PIPS.MIN) + TILE_PIPS.MIN);
        var orientation = Math.floor(Math.random() * 2) === 1 ?
            TILE_ORIENTATION.VERTICAL :
            TILE_ORIENTATION.HORIZONTAL;

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
    tile: {
        height: 100,
        width: 50
    },
    rotate: {
        transform: [{rotate: '90deg'}]
    },
    tileCell: {
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        width: 50
    }
});

AppRegistry.registerComponent('DrDomino', () => DrDomino);
