import React from 'react';
import EventsList from './components/EventsList';
import EventsMap from './components/EventsMap';
import { createBottomTabNavigator } from 'react-navigation';

const Nav = createBottomTabNavigator ({
  Map: {
    screen: EventsList
  },
  List: {
    screen: EventsList
  }
});

export default class App extends React.Component {
  render() {
    return <Nav />;
  }
}