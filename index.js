/**
 * Created by michaelmalura on 30/07/16.
 */

import React, {Component} from 'react';
import {
	Text,
	Image,
	StyleSheet,
	TouchableHighlight,
	View
} from 'react-native';
import Style from './style';
class dimmer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			darkness: props.darkness
		}
	}

	render() {
		const darknessStyle = StyleSheet.create({
			dimmer: {backgroundColor: `rgba(0,0,0,${this.state.darkness})`}
		});
		return (
			<View style={[Style.dimmer, darknessStyle.dimmer, this.props.dimmerStyle]}/>
		)
	}
}

dimmer.propTypes = {
	darkness   : React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string,
	]),
	dimmerStyle: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array,
		React.PropTypes.object
	]),
};
dimmer.defaultProps = {
	darkness: 0.5
};

export default dimmer;