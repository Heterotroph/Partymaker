import React from 'react';
import { Container } from 'native-base';
import { DrawerActions } from 'react-navigation';
import ComplexHeader from '~/src/components/ComplexHeader';
import ComplexFooter from '~/src/components/ComplexFooter';
import EventPreview from '~/src/components/EventPreview';
import EventsMap from '~/src/components/EventsMap';
import { styles } from '~/src/styles';
import buttons from './buttons';

import temp_events_data from '~/data/events_example.json';

export default class MapScreen extends React.Component {

  state = {
    event: null
  }

  constructor(props) {
    super(props);
    this.state.event = props.event;
  }

  onChange(event) {
    this.state.event = event;
    this.setState({ event });
  }

  render() {
    const { navigation } = this.props;
    const preview = this.state.event ? <EventPreview /> : null;
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
        <EventsMap
          coords={[30.335, 59.934]}
          events={temp_events_data}
          onEventChange={this.onChange.bind(this)}
        />
        { preview }
        <ComplexFooter navigation={navigation} buttons={buttons.footer} map />
      </Container>
    );
  }
}