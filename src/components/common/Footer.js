import React, { Component } from 'react';
//import { alert } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import { LayoutAnimation } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';
import StackLayout from './layouts/Stacklayout';
import { CardSection } from './index';
 
class Footer extends Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 50, elevation: 2, position: 'bottom', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => (`New Tab at position ${newTabIndex}`)}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Movies & TV"
          
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Music"
          
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Books"
          
        />


      </BottomNavigation>
    );
  }
}

export { Footer };
