import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { CreateWorkout } from './';
import { Button, CardSection, Header } from './common';


class HomeScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'HomeScreen',
		tabBarIcon: ({ tintColor }) => (
			<Image 
			source={require('../../images/28000778_10210191537654208_64805463_n.png')}
			style={{ width: 22, height: 22, tintColor: 'orange' }}
			/>
)
	}
	state = { Screen: null };

	renderContent() {
    switch (this.state.Screen) {
      case CreateWorkout:
        return <CreateWorkout />;    
      default:
        return (
        <View>
      <CardSection>
          <Button onPress={() => this.setState({ Screen: CreateWorkout })}>
            My Workouts
          </Button>
      </CardSection>

          </View>
          );
    }
  }
	render() {
  return (
      <View>

        <Header headerText="Fitness App" />

        {this.renderContent()}

      </View>
      );
  }
}

export { HomeScreen };
