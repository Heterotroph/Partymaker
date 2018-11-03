import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const thumbnailSize = 100;

export default StyleSheet.create({
  container: {
    backgroundColor: '#262626'
  },
  drawer: {
  },
  map: {
    flex: 1,
    width: width,
    height: height
  },
  text: {
    color: '#000'
  },
  thumbnail: {
    width: thumbnailSize,
    height: thumbnailSize,
    borderRadius: thumbnailSize/2,
    borderColor: 'transparent',
    borderWidth: 2
  },
  sidebarCard: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 17,
    paddingBottom: 17
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
});