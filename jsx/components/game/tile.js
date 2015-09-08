var React = require('react-native');

var GlobalConfig = require('../../../global_config');
var TileCell = require('./tile_cell');

var {
    Animated,
    StyleSheet,
    Text,
    View
} = React;

class Tile extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            rotateValue: 0
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.orientation !== nextProps.orientation) {
            this.setState({
                rotateValue: this.props.orientation === GlobalConfig.TILE_ORIENTATION.HORIZONTAL ? 90 : 0
            });
        }
    }
    render() {
        return (
            <View style={this.getStyles().tile}>
                <TileCell value={this.props.value[0]} />
                <TileCell value={this.props.value[1]} />
            </View>
        );
    }
    getStyles() {
        return StyleSheet.create({
            tile: {
                height: 100,
                width: 50,
                transform: [
                    {rotate: `${this.state.rotateValue}deg`}
                ]
            }
        });
    }
}

module.exports = Tile;
