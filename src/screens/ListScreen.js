import React from 'react';
import { Container } from 'native-base';
import { DrawerActions } from 'react-navigation';
import ComplexHeader from '~/src/components/ComplexHeader';
import ComplexFooter from '~/src/components/ComplexFooter';
import EventsList from '~/src/components/EventsList';
import { styles } from '~/src/styles';
import buttons from './buttons';

export default class ListScreen extends React.Component {
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