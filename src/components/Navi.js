import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import { Books, Music, Movies } from './';
/**
 * react-navigation's TabNavigator.
 */
const Navi = () => TabNavigator({
  Movies: { screen: Movies },
  Music: { screen: Music },
  Books: { screen: Books }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        Movies: {
          barBackgroundColor: '#37474F'
        },
        Music: {
          barBackgroundColor: '#00796B'
        },
        Books: {
          barBackgroundColor: '#5D4037'
        }
      }
    }
  }
});

export { Navi };
