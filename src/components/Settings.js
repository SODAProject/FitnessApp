import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, CardSection, Header } from './common';


class Settings extends Component {
	static navigationOptions = {
		tabBarLabel: 'Settings',
			tabBarIcon: ({ tintColor }) => (
			<Image 
			source={require('../../images/28053382_10210191580855288_891952963_n.png')}
			style={{ width: 22, height: 22, tintColor: 'orange' }}
			/>
)
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
