import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection } from './components/common';

class App extends Component {
	render() {
		return (
			<CardSection> 
				<Button>
					Filter
				</Button>
				<Button>
					Filter
				</Button>
			</CardSection>
			);
	}
}

export default App;
