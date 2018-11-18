import React from 'react';
import { Container, Item } from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { mapStyles } from '~/src/styles';

Mapbox.setAccessToken('pk.eyJ1IjoiaGV0ZXJvdHJvcGgiLCJhIjoiY2puejVmYnA5MHZ6bzNxbDZrNWFvaHBrZyJ9.6Az6HZpsKdgtAaTvZnEhxA');


export default class EventsMap extends React.Component {

  state = {
    coords: null,
    events: null,
  }

  constructor(props) {
    super(props);
    this.state.coords = props.coords;
    this.state.events = props.events;
  }

  geojson(events) {
    return {
      type: "FeatureCollection",
      features: events.map(event => {
        return {
          type: "Feature",
          properties: {
            id: event.id,
            coords: event.coords,
            category: event.category,
            height: Math.log(event.capacity) * 100,
            base_height: 0
          },
          geometry: {
            type: "Polygon",
            coordinates: [this.draw(event.coords, 6, 0.001)]
          }
        }
      })
    }
  }

  draw({ long, lat}, c, r) {
    const result = [];
    const angle = 360 / c;
    for (i = 0; i < c; i++) {
      result.push([
        long + r * Math.cos(i * angle * Math.PI / 180) / Math.cos(lat * Math.PI / 180),
        lat + r * Math.sin(i * angle * Math.PI / 180)
      ]);
    }
    result.push(result[0]);
    return result;
  }

  onSourceLayerPress(e) {
    const event = e.nativeEvent.payload;
    this.props.onEventChange(event.properties.id);
    const { long, lat } = event.properties.coords;
    
    this.mapbox.moveTo([long, lat], 3000);
  }

  onPress(e) {
    this.setState({ event: null })
    this.props.onEventChange(null);
  }

  render() {  
    return (
      <Container style={{ flex: 1, marginTop: -56, zIndex: -1 }}>
        <Mapbox.MapView
          ref={(ref) => { this.mapbox = ref; }}
          styleURL={Mapbox.StyleURL.Dark}
          pitch={30}
          zoomLevel={11}
          minZoomLevel={8}
          maxZoomLevel={15}
          logoEnabled={false}
          compassEnabled={false}
          showUserLocation={true}
          attributionEnabled={false}
          centerCoordinate={this.state.coords}
          style={{ flex: 1 }}
          onPress={this.onPress.bind(this)}>
          <Mapbox.ShapeSource
            id="indoorBuildingSource"
            shape={this.geojson(this.state.events)}
            hitbox={{ width: 100, height: 100 }}
            onPress={this.onSourceLayerPress.bind(this)}>
            <Mapbox.FillExtrusionLayer
              id="building3d"
              style={mapStyles.events}
            />
          </Mapbox.ShapeSource>
        </Mapbox.MapView>
      </Container>
    )
  }
}