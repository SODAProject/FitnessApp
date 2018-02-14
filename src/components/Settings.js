import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, CardSection, Card, Header } from './common';


class Settings extends Component {
	static navigationOptions = {
		tabBarLabel: 'Settings'
	}
	render() {
		return (

		<View>
			<Header headerText="Settings" />
			
			<CardSection> 
				<Button>
					My Profile
				</Button>
				<Button>
					Other Settings
				</Button>
			</CardSection>
		</View>
			
		);
	}
}

export { Settings };
