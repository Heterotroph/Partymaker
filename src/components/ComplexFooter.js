import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import styles from '~/src/styles';

export default class ComplexFooter extends Component {
  render() {
    const icons = "MaterialCommunityIcons";
    const buttons = [];
    const { navigation } = this.props;

    this.props.buttons.map((item) => {
      const isSelected = Boolean(this.props[item.key]);
      const color = isSelected ? styles.greyA : styles.greyD;
      const [namespace, icon] = item.icon.split(":");
      buttons.push(
        <Button
          key={item.key}
          active={isSelected}
          onPress={() => navigation.navigate(item.key)}
          style={styles.bTransparent}>
          <Icon
            type={namespace}
            name={icon}
            style={color}
          />
          <Text style={color}>
            {item.title}
          </Text>
        </Button>
      );
    })
    return (
      <Footer>
        <FooterTab
          style={styles.bWhite}>
          {buttons}
        </FooterTab>
      </Footer>
    );
  }
}