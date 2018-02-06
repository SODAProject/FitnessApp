import React, { Component } from 'react';
import { View } from 'react-native';
import { HomeScreen, ChatScreen, Settings } from './components';
import { Header, Button, CardSection, Footer } from './components/common';

class App extends Component {
	state = { Screen: null };

	renderContent() {
    switch (this.state.Screen) {
      case Settings:
        return <Settings />;
      case HomeScreen:
        return <Footer />;
      case ChatScreen:
        return <ChatScreen />;       
      default:
        return (
        <View>
			<CardSection>
          <Button onPress={() => this.setState({ Screen: Settings })}>
            Settings
          </Button>

          <Button onPress={() => this.setState({ Screen: HomeScreen })}>
            HomeScreen
          </Button>

          <Button onPress={() => this.setState({ Screen: ChatScreen })}>
            ChatScreen
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

export default App;
