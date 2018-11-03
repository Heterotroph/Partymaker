import React from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { Container, Content, Drawer } from 'native-base';
import ComplexHeader from './components/ComplexHeader';
import ComplexFooter from './components/ComplexFooter';
import EventsList from './components/EventsList';
import SideBar from './components/SideBar';
import styles from './styles';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiaGV0ZXJvdHJvcGgiLCJhIjoiY2puejVmYnA5MHZ6bzNxbDZrNWFvaHBrZyJ9.6Az6HZpsKdgtAaTvZnEhxA');
const {width, height} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    Drawer.defaultProps.styles.mainOverlay.elevation = 0;
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#ff9c00" translucent={true} />
        <Drawer
          type="displace"
          style={styles.drawer}
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar />}
          onClose={() => this.drawer._root.close()} >
          <ComplexHeader openDrawer={() => this.drawer._root.open()} />
          <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Dark}
            zoomLevel={15}
            logoEnabled={false}
            compassEnabled={false}
            showUserLocation={true}
            centerCoordinate={[11.256, 43.770]}
            style={{ position: 'absolute', width: width, height: height, zIndex: -1, }}>
          </Mapbox.MapView>
          <Content style={{ zIndex: -2, }}/>
          <ComplexFooter />
        </Drawer>
      </Container>
    )
  }
}