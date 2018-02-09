import React, { Component } from 'react';

// import { View } from 'react-native';
import { CardSection, Button } from './common';


class ChatScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'ChatScreen'
	}
	render() {
		return (
			<CardSection>
				<Button>
					ChatScreen
				</Button>
			</CardSection>
		);
	}
}

export { ChatScreen };
