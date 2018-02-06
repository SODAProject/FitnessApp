import React from 'react-native';
import Swiper from 'react-native-swiper';
import randomcolor from 'randomcolor';
import { TitleText } from './components';

const {
  View,
} = React;

class App extends React.Component {

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: randomcolor(),
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  render() {
    return (
      <Swiper loop={false} showsPagination={false} index={1}>
        <View style={this.viewStyle()}>
          <TitleText label="Left" />
        </View>
        <Swiper horizontal={false} loop={false} showsPagination={false} index={1}>
          <View style={this.viewStyle()}>
            <TitleText label="Top" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Home" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Bottom" />
          </View>
        </Swiper>        
        <View style={this.viewStyle()}>
          <TitleText label="Right" />
        </View>
      </Swiper>
      
    );
  }
}

export default App;
