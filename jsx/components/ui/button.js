var React = require('react-native');

var ReactNativeButton = require('react-native-button');

var {
	StyleSheet
} = React;

var Button = React.createClass({
	render() {
		return (
			<ReactNativeButton
				{...this.props}
				style={[styles.button, this.props.style]}
			>{this.props.children}</ReactNativeButton>
		);
	}
});

var styles = StyleSheet.create({
	button: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'green',
		fontSize: 8
	}
});

module.exports = Button;
