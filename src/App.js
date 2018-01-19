import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
	render() {
		return (
			<View> 
			<Header headerText="Fitness App" />
			</View>
			);
	}
}
//			<Header headerText="FitnessApp" />
export default App;
