import React, { Component } from 'react';
//import { View } from 'react-native';
import { Button, CardSection } from './common';


class Settings extends Component {
	static navigationOptions = {
		tabBarLabel: 'Settings'
	}
	render() {
		return (
			<CardSection> 
				<Button>
					My Profile
				</Button>
				<Button>
					Other Settings
				</Button>
			</CardSection>
			
		);
	}
}

export { Settings };
