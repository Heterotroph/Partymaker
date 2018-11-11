import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class ComplexFooter extends Component {
  render() {
    const icons = "MaterialCommunityIcons";
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: '#fff' }}>
          <Button key='list'>
            <Icon type={icons} style={{ color: '#a8a8a8' }} name="view-dashboard" />
          </Button>
          <Button key='map' style={{ backgroundColor: 'transparent' }} active>
            <Icon type={icons} style={{ color: '#262626' }} name="map" />
          </Button>
          <Button key='new'>
            <Icon type={icons} style={{ color: '#a8a8a8' }} name="plus-box-outline" />
            {/*map-marker-plus, plus-box-outline, plus-outline, plus-circle, plus-box, plus-outline */}
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}