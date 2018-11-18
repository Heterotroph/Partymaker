import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import DrawerContent from '~/src/components/DrawerContent';
import MapScreen from './MapScreen';
import ListScreen from './ListScreen';

const Stack = createDrawerNavigator({
  map: MapScreen,
  list: ListScreen
}, {
  initialRouteName: 'map',
  contentComponent: DrawerContent
});

export default class Navigator extends React.Component {
  render() {
    const { navigation } = this.props;
    return <Stack navigation={navigation} />;
  }
}