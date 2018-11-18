import React from 'react';
import { View } from 'react-native';
import { styles } from '~/src/styles';

export default class EventPreview extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <View style={styles.eventPreview}>
      </View>
    )
  }
}