var React = require('react-native');

var GlobalConfig = require('../../../global_config');

var Button = require('../ui/button');

var Tile = require('./tile');

var {
	View,
	StyleSheet
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
			<Button onPress={this._handleRandomButtonPress}>Randomize</Button>
		);
	},
	renderDropButton() {
		return (
			<Button onPress={this._handleDropButtonPress}>Drop</Button>
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

var styles = StyleSheet.create({
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
	}
});

module.exports = Stage;
