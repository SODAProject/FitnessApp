import React from 'react';
//import { View } from 'react-native';
import { Button, CardSection } from './common';


const Settings = () => {
		return (
			<CardSection> 
				<Button>
					Filter
				</Button>
				<Button>
					Create Workout
				</Button>
			</CardSection>
		);
	};

export { Settings };