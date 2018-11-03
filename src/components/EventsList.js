import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class EventsList extends React.Component {
  render() {
    return (
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/12656006?s=460&v=4' }} />
          </Left>
          <Body>
            <Text>Ruslan Akhtyamov</Text>
            <Text note>Ехал грека через реку, видит грека в реке рак. Сунул грека руку в реку, рак за руку - греку цап.</Text>
          </Body>
          <Right>
            <Text note>20:00</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/12656006?s=460&v=4' }} />
          </Left>
          <Body>
            <Text>Ruslan Akhtyamov</Text>
            <Text note>Ехал грека через реку, видит грека в реке рак. Сунул грека руку в реку, рак за руку - греку цап.</Text>
          </Body>
          <Right>
            <Text note>20:00</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/12656006?s=460&v=4' }} />
          </Left>
          <Body>
            <Text>Ruslan Akhtyamov</Text>
            <Text note>Ехал грека через реку, видит грека в реке рак. Сунул грека руку в реку, рак за руку - греку цап.</Text>
          </Body>
          <Right>
            <Text note>20:00</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/12656006?s=460&v=4' }} />
          </Left>
          <Body>
            <Text>Ruslan Akhtyamov</Text>
            <Text note>Ехал грека через реку, видит грека в реке рак. Сунул грека руку в реку, рак за руку - греку цап.</Text>
          </Body>
          <Right>
            <Text note>20:00</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/12656006?s=460&v=4' }} />
          </Left>
          <Body>
            <Text>Ruslan Akhtyamov</Text>
            <Text note>Ехал грека через реку, видит грека в реке рак.</Text>
          </Body>
          <Right>
            <Text note>20:00</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/12656006?s=460&v=4' }} />
          </Left>
          <Body>
            <Text>Ruslan Akhtyamov</Text>
            <Text note>Ехал грека через реку, видит грека в реке рак.</Text>
          </Body>
          <Right>
            <Text note>20:00</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
}