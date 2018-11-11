import React from 'react';
import { Container } from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiaGV0ZXJvdHJvcGgiLCJhIjoiY2puejVmYnA5MHZ6bzNxbDZrNWFvaHBrZyJ9.6Az6HZpsKdgtAaTvZnEhxA');

export default class EventsMap extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1, marginTop: -56, zIndex: -1 }}>
        <Mapbox.MapView
          ref={(ref) => { this.mapbox = ref; }}
          styleURL={Mapbox.StyleURL.Dark}
          zoomLevel={12}
          logoEnabled={false}
          compassEnabled={false}
          showUserLocation={true}
          attributionEnabled={false}
          centerCoordinate={[30.335, 59.934]}
          style={{ flex: 1 }}>
        </Mapbox.MapView>
      </Container>
    )
  }
}