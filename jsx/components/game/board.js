var React = require('react-native');

var {
	StyleSheet,
	View
} = React;

var Board = React.createClass({
	render() {
		return (
			<View style={styles.board}>

			</View>
		);
	}
});

var styles = StyleSheet.create({
	board: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'red',
		height: 400,
		width: 200
	}
});

module.exports = Board;
