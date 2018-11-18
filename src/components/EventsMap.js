import React from 'react';
import { Container } from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import eventsdata from '~/data/events_example.json';

Mapbox.setAccessToken('pk.eyJ1IjoiaGV0ZXJvdHJvcGgiLCJhIjoiY2puejVmYnA5MHZ6bzNxbDZrNWFvaHBrZyJ9.6Az6HZpsKdgtAaTvZnEhxA');
const layerStyles = Mapbox.StyleSheet.create({
  events: {
    fillExtrusionOpacity: 0.8,
    fillExtrusionColor: Mapbox.StyleSheet.source([
      //Вечеринки
      [1000, '#ff9900'],
      [1001, '#ff6600'],
      [1002, '#ff3300'],
      //Активный отдых
      [2000, '#99cc99'],
      [2001, '#99ff66'],
      //Клубы по интересам
      [3000, '#00ffff'],
      [3001, '#33ccff']
    ], 'category', Mapbox.InterpolationMode.Categorical),
    fillExtrusionHeight: Mapbox.StyleSheet.identity('height'),
    fillExtrusionBase: Mapbox.StyleSheet.identity('base_height')
  },
});

export default class EventsMap extends React.Component {

  geojson(events) {
    return {
      type: "FeatureCollection",
      features: events.map(event => {
        return {
          type: "Feature",
          properties: {
            id: event.id,
            category: event.category,
            height: Math.log(event.capacity) * 100,
            base_height: 0
          },
          geometry: {
            type: "Polygon",
            coordinates: [this.draw(event.coords, 6, 0.0005)]
          }
        }
      })
    }
  }

  draw({ long, lat }, c, r) {
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
    const feature = e.nativeEvent.payload;
    console.warn("EventsMap#onSourceLayerPress");
  }

  onPress(e) {
    console.warn("EventsMap#onPress");
  }

  render() {  
    return (
      <Container style={{ flex: 1, marginTop: -56, zIndex: -1 }}>
        <Mapbox.MapView
          ref={(ref) => { this.mapbox = ref; }}
          styleURL={Mapbox.StyleURL.Dark}
          pitch={40}
          zoomLevel={12}
          minZoomLevel={8}
          maxZoomLevel={16}
          logoEnabled={false}
          compassEnabled={false}
          showUserLocation={true}
          attributionEnabled={false}
          centerCoordinate={[30.335, 59.934]}
          style={{ flex: 1 }}
          onPress={this.onPress.bind(this)}>
          <Mapbox.ShapeSource
            id="indoorBuildingSource"
            shape={this.geojson(eventsdata)}
            hitbox={{ width: 20, height: 20 }}
            onPress={this.onSourceLayerPress.bind(this)}>
            <Mapbox.FillExtrusionLayer
              id="building3d"
              style={layerStyles.events}
            />
          </Mapbox.ShapeSource>
        </Mapbox.MapView>
      </Container>
    )
  }
}