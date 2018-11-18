import { StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

const sidebarThumbnailSize = 100;
const sidebar = {
  sidebarUserCard: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 17,
    paddingBottom: 17
  },
  sidebarThumbnail: {
    width: sidebarThumbnailSize,
    height: sidebarThumbnailSize,
    borderRadius: sidebarThumbnailSize / 2,
    borderColor: 'transparent',
    borderWidth: 2
  },
  awardsList: {
    paddingTop: 7,
    paddingLeft: 17,
    backgroundColor: '#262626'
  },
  awardItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}

const eventPreview = {
  eventPreview: {
    flex: 0.3
  }
}

const backgrounds = {
  bTransparent: {backgroundColor: 'transparent'},
  bWhite: {backgroundColor: '#fff'},
  bGreyA: {backgroundColor: '#191919'},
  bGreyB: {backgroundColor: '#222222'},
  bGreyC: {backgroundColor: '#262626'},
  bGreyD: {backgroundColor: '#a8a8a8'}
}

const colors = {
  greyA: {color: '#191919'},
  greyB: {color: '#222222'},
  greyC: {color: '#262626'},
  greyD: {color: '#a8a8a8'}
}

export const styles = StyleSheet.create({
  ...sidebar,
  ...eventPreview,
  ...colors,
  ...backgrounds,
  container: {
    backgroundColor: '#262626'
  },
});

export const mapStyles = Mapbox.StyleSheet.create({
  events: {
    fillExtrusionOpacity: 0.8,
    fillExtrusionColor: Mapbox.StyleSheet.source([
      //Вечеринки
      [1000, '#ff9900'],
      [1001, '#ff6600'],
      [1002, '#ff3300'],
      //Активный отдых
      [2000, '#99cc99'],
      [2001, '#99ff66'],
      //Клубы по интересам
      [3000, '#00ffff'],
      [3001, '#33ccff']
    ], 'category', Mapbox.InterpolationMode.Categorical),
    fillExtrusionHeight: Mapbox.StyleSheet.identity('height'),
    fillExtrusionBase: Mapbox.StyleSheet.identity('base_height')
  },
});