import React from 'react';
import { Header, Left, Button, Icon, Right, Body } from 'native-base';
import styles from '~/src/styles';

export default class ComplexHeader extends React.Component {
  render() {
    const [namespaceLeft, iconLeft] = this.props.left.icon.split(":");
    const [namespaceRight, iconRight] = this.props.right.icon.split(":");
    const color = this.props.transparent ? styles.bTransparent : styles.bGreyC;
    return (
      <Header noShadow style={color}>
        <Left>
          <Button transparent onPress={() => this.props.onLeftPress()}>
            <Icon type={namespaceLeft} name={iconLeft} />
          </Button>
        </Left>
        <Body>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.onRightPress()}>
            <Icon type={namespaceRight} name={iconRight} />
          </Button>
        </Right>
      </Header>
    );
  }
}