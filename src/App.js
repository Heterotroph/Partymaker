import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Drawer } from 'native-base';
import ComplexHeader from './components/ComplexHeader';
import ComplexFooter from './components/ComplexFooter';
import EventsMap from './components/EventsMap';
import SideBar from './components/SideBar';
import styles from './styles';

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
          <Container>
            <ComplexHeader
              openDrawer={() => this.drawer._root.open()}
              style={{ backgroundColor: 'transparent', zIndex: 10000, elevation: 0 }}
            />
            <EventsMap />
            <ComplexFooter />
          </Container>
        </Drawer>
      </Container>
    )
  }
}