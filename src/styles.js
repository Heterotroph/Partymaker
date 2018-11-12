import { StyleSheet } from 'react-native';

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

const colors = {
  greyA: {color: '#191919'},
  greyB: {color: '#222222'},
  greyC: {color: '#262626'},
  greyD: {color: '#a8a8a8'}
}

const backgrounds = {
  bTransparent: {backgroundColor: 'transparent'},
  bWhite: {backgroundColor: '#fff'},
  bGreyA: {backgroundColor: '#191919'},
  bGreyB: {backgroundColor: '#222222'},
  bGreyC: {backgroundColor: '#262626'},
  bGreyD: {backgroundColor: '#a8a8a8'}
}

export default StyleSheet.create({
  ...sidebar,
  ...colors,
  ...backgrounds,
  container: {
    backgroundColor: '#262626'
  },
});