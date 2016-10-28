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

export default class Dimmer extends Component {
	render() {
		const darknessStyle = StyleSheet.create({
			dimmer: {backgroundColor: `rgba(0,0,0,${this.props.darkness})`}
		});
		return (
			<View style={[Style.dimmer, darknessStyle.dimmer, this.props.dimmerStyle]}/>
		)
	}
}

Dimmer.propTypes = {
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
Dimmer.defaultProps = {
	darkness: 0.5
};
