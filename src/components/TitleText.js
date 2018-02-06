import React from 'react-native';

const {
  Text,
} = React;

class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    );
  }
}

export { TitleText };
