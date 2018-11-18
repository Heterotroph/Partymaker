import React from 'react';
import { View } from 'react-native';
import { Container, Content, Icon, Button, Thumbnail, Text, Body } from 'native-base';
import { styles } from '~/src/styles';

export default class DrawerContent extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#262626' }}>
        <Content>
          <View style={styles.sidebarUserCard}>
            <Thumbnail style={styles.sidebarThumbnail} source={{ uri: 'https://d38we5ntdyxyje.cloudfront.net/1103491/profile/LCNVLUBL_avatar_medium_square.jpg' }} />
            <Body style={{ paddingTop: 17 }}>
              <Text style={{ color: '#262626', fontSize: 16 }}>Ruslan Akhtyamov</Text>
              <Text style={{ color: '#262626', fontSize: 12 }}>рейтинг 53</Text>
            </Body>
          </View>
          <View style={styles.awardsList}>
            <Button style={styles.awardItem} transparent iconLeft>
              <Icon style={{ color: '#a8a8a8' }} type="Ionicons" name='md-ribbon' />
              <Text style={{ position: 'absolute', color: '#a8a8a8', paddingLeft: 50, fontSize: 12  }}>Топ Вечеринка НГ</Text>
            </Button>
            <Button style={styles.awardItem} transparent iconLeft>
              <Icon style={{ color: '#a8a8a8' }} type="Ionicons" name='md-flame' />
              <Text style={{ position: 'absolute', color: '#a8a8a8', paddingLeft: 50, fontSize: 12  }}>ТопТусовщик недели</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}