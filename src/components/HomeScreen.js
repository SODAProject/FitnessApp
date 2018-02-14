import React, { Component } from 'react';
import { View } from 'react-native';
import { CreateWorkout } from './';
import { Button, CardSection, Header } from './common';


class HomeScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'HomeScreen'
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
