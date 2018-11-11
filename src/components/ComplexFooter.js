import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class ComplexFooter extends Component {
  render() {
    const icons = "MaterialCommunityIcons";
    const { navigation } = this.props.navigation
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: '#fff' }}>
          <Button
            key='list'
            onPress={() => this.props.navigation.navigate('list')}>
            <Icon type={icons} style={{ color: '#a8a8a8' }} name="view-dashboard" />
          </Button>
          <Button
            active
            key='map'
            style={{ backgroundColor: 'transparent' }}
            onPress={() => this.props.navigation.navigate('map')}>
            <Icon type={icons} style={{ color: '#262626' }} name="map" />
          </Button>
          <Button
            key='new'
            onPress={() => this.props.navigation.navigate('map')}>
            <Icon type={icons} style={{ color: '#a8a8a8' }} name="plus-box-outline" />
            {/*map-marker-plus, plus-box-outline, plus-outline, plus-circle, plus-box, plus-outline */}
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}