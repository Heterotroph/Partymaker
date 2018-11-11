import React from 'react';
import { Container, Text } from 'native-base';
import { createSwitchNavigator } from 'react-navigation';
import ComplexHeader from './components/ComplexHeader';
import ComplexFooter from './components/ComplexFooter';
import EventsMap from './components/EventsMap';

const footerContent = [
  {
    icon: 'MaterialCommunityIcons:view-dashboard',
    key: 'list'
  },
  {
    icon: 'MaterialCommunityIcons:map',
    key: 'map'
  },
  {
    icon: 'MaterialCommunityIcons:plus-box-outline',
    key: 'new'
  }
]

class MapScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Text>Мама Ама Криминал</Text>
        <ComplexHeader
          openDrawer={() => this.drawer._root.open()}
          style={{ backgroundColor: 'transparent', zIndex: 10000, elevation: 0 }}
        />
        <EventsMap />
        <ComplexFooter navigation={navigation}/>
      </Container>
    );
  }
}

class ListScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Text>Хуй Пизда Джагурда</Text>
        <ComplexHeader
          openDrawer={() => this.drawer._root.open()}
          style={{ backgroundColor: 'transparent', zIndex: 10000, elevation: 0 }}
        />
        <EventsMap />
        <ComplexFooter navigation={navigation}/>
      </Container>
    );
  }
}

const Stack = createSwitchNavigator({
  map: MapScreen,
  list: ListScreen
}, { initialRouteName: 'map' });

export default class Navigator extends React.Component {
  render() {
    const { navigation } = this.props;
    return <Stack navigation={navigation} />;
  }
}