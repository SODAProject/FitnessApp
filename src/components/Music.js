import React, { Component } from 'react';
import { Text, View } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

class Music extends Component {
  static navigationOptions = {
    tabBarLabel: 'Music',
    //tabBarIcon: () => <Icon size={24} name="music-note" color="white" />
  }

  render() {
    return <View><Text>Music</Text></View>;
  }
}

export { Music };
