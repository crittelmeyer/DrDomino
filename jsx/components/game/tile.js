var React = require('react-native');

var GlobalConfig = require('../../../global_config');
var TileCell = require('./tile_cell');

var {
    StyleSheet,
    Text,
    View
} = React;

var Tile = React.createClass({
    render() {
        var style = [
            styles.tile,
            this.props.orientation === GlobalConfig.TILE_ORIENTATION.HORIZONTAL && styles.rotate
        ];

        return (
            <View style={style}>
                <TileCell value={this.props.value[0]} />
                <TileCell value={this.props.value[1]} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    tile: {
        height: 100,
        width: 50
    },
    rotate: {
        transform: [{rotate: '90deg'}]
    }
});

module.exports = Tile;
