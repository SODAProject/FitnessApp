import React, { Component } from 'react';
import { View } from 'react-native';
import { HomeScreen, ChatScreen, Filter } from './components';
import { Header, Button, CardSection, Spinner } from './components/common';

class App extends Component {
	state = { Screen: null };

	renderContent() {
    switch (this.state.Screen) {
      case ChatScreen:
        return <ChatScreen />;
      case HomeScreen:
        return <Spinner size="large" />;
      case Filter:
        return <Filter />;       
      default:
        return (
        <View>
			<CardSection>
          <Button onPress={() => this.setState({ Screen: ChatScreen })}>
            ChatScreen
          </Button>

          </CardSection>

          <CardSection>
          <Button onPress={() => this.setState({ Screen: HomeScreen })}>
            HomeScreen
          </Button>
          </CardSection>

          <CardSection>
          <Button onPress={() => this.setState({ Screen: Filter })}>
            Filter
          </Button>
           </CardSection>
          </View>
          );
    }
  }
	render() {
	return (
      <View>
        <Header headerText="Navigate Through Screens" />

        {this.renderContent()}
      </View>
      );
	}
}

export default App;
