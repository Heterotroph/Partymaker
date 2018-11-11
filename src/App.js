import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Drawer } from 'native-base';
import Navigator from './Navigator';
import SideBar from './components/SideBar';
import styles from '~/src/styles';

export default class App extends React.Component {

  state = {

  }

  render() {
    Drawer.defaultProps.styles.mainOverlay.elevation = 0;
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#ff9c00" translucent={true} />
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          type="displace"
          content={<SideBar />}
          onClose={() => this.drawer._root.close()} >
          <Navigator ref={(ref) => { this.navigator = ref; }} />
        </Drawer>
      </Container>
    )
  }
}