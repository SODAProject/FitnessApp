import React, { Component } from 'react';
//import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { HomeScreen, ChatScreen, Settings } from './components';
//import { Header, Button, CardSection, Footer } from './components/common';

// class App extends Component {
//   state = { Screen: null };

//   renderContent() {
//     switch (this.state.Screen) {
//       case Settings:
//         return <Settings />;
//       case HomeScreen:
//         return <Footer />;
//       case ChatScreen:
//         return <ChatScreen />; 
//       case CreateWorkout:
//         return <CreateWorkout />;      
//       default:
//         return (
//         <View>
//       <CardSection>
//           <Button onPress={() => this.setState({ Screen: Settings })}>
//             Settings
//           </Button>

//           <Button onPress={() => this.setState({ Screen: HomeScreen })}>
//             HomeScreen
//           </Button>

//           <Button onPress={() => this.setState({ Screen: ChatScreen })}>
//             ChatScreen
//           </Button>
//       </CardSection>

//       <CardSection>
//           <Button onPress={() => this.setState({ Screen: CreateWorkout })}>
//             CreateWorkout
//           </Button>
//       </CardSection>
//           </View>
//           );
//     }
//   }
//   render() {
//   return (
//       <View>

//         <Header headerText="Fitness App" />

//         {this.renderContent()}

//       </View>
//       );
//   }
// }

const NavigationScreen = TabNavigator({
  Settings: { screen: Settings },
  HomeScreen: { screen: HomeScreen },
  ChatScreen: { screen: ChatScreen },
}, {
  //tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  isSelected: HomeScreen,
  tabBarOptions: {
    inactiveTintColor: 'white',
    activeTintColor: 'gold',
    activeBackgroundColor: '#0c5072',
    inactiveBackgroundColor: '#0a4968',


    // bottomNavigationOptions: {
    //   labelColor: 'white',
    //   rippleColor: 'white',
    //   tabs: {
    //     Settings: {
    //       barBackgroundColor: '#0c5072',
    //     },
    //     HomeScreen: {
    //       barBackgroundColor: '#0c5072'
    //     },
    //     ChatScreen: {
    //       barBackgroundColor: '#0c5072'
    // }

  // } } } }
  } } 
  );

NavigationScreen.navigationOptions = {
  title: 'Tab Example'
};

export default NavigationScreen;
