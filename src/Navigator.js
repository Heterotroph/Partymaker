import React from 'react';
import { Container } from 'native-base';
import { createDrawerNavigator, DrawerActions } from 'react-navigation';
import ComplexHeader from './components/ComplexHeader';
import ComplexFooter from './components/ComplexFooter';
import EventsMap from './components/EventsMap';
import EventsList from './components/EventsList';
import DrawerContent from './components/DrawerContent';
import buttons from './buttons';
import styles from './styles';

class MapScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.bWhite}>
        <ComplexHeader
          transparent
          navigation={navigation}
          style={{ zIndex: 10000, elevation: 0 }}
          left={buttons.header.left}
          right={buttons.header.right}
          onLeftPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          onRightPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <EventsMap />
        <ComplexFooter navigation={navigation} buttons={buttons.footer} map />
      </Container>
    );
  }
}

class ListScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.bGreyC}>
        <ComplexHeader
          navigation={navigation}
          left={buttons.header.left}
          right={buttons.header.right}
          onLeftPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          onRightPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <EventsList />
        <ComplexFooter navigation={navigation} buttons={buttons.footer} list />
      </Container>
    );
  }
}

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