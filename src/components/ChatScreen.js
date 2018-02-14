import React, { Component } from 'react';
import { View, Image } from 'react-native';
// import { View } from 'react-native';
import { CardSection, Button, Header } from './common';


class ChatScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'ChatScreen',
			tabBarIcon: ({ tintColor }) => (
			<Image 
			source={require('../../images/27849381_10210191694178121_1292612021_n.png')}
			style={{ width: 22, height: 22, tintColor: 'orange' }}
			/>
)
	}
	render() {
		return (
			<View>
			<Header headerText="ChatScreen" />
			<CardSection>
				<Button>
					ChatScreen
				</Button>
			</CardSection>
			</View>
		);
	}
}

export { ChatScreen };
