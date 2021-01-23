import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: 65,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT',
    color: 'white',
    marginRight: 23
  },
  rightImageView: {
    height: 35,
    width: 35,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  leftImageView: {
    height: 25,
    width: 25,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: '100%',
  },
  menuIconImageDimension: {
    height: '98%',
    width: '98%',
  },
  centerContainer: {
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '100%',

  },
});