import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'native-base';
import Navigator from './screens/Navigator';
import { styles } from '~/src/styles';

export default class App extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={true} translucent={true} />
        <Navigator ref={(ref) => { this.navigator = ref; }} />
      </Container >
    )
  }
}