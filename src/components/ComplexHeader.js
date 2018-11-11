import React from 'react';
import { Header, Left, Button, Icon, Right, Body } from 'native-base';

export default class ComplexHeader extends React.Component {
  render() {
    const icons = "MaterialCommunityIcons";
    return (
      <Header noShadow style={{ backgroundColor: 'transparent' }}>
        <Left>
          <Button transparent onPress={() => this.props.openDrawer()} >
            <Icon type={icons} name='menu' />
          </Button>
        </Left>
        <Body>
        </Body>
        <Right>
          <Button transparent >
            <Icon type={icons} name="filter-outline" />
          </Button>
        </Right>
      </Header>
    );
  }
}