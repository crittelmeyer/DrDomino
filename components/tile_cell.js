var React = require('react-native');
var _ = require('lodash');

var {
    StyleSheet,
    Text,
    View
} = React;

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

var styles = StyleSheet.create({
    tileCell: {
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        width: 50
    }
});

module.exports = TileCell;
