import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style'

interface CustomHeaderProps {
  navigation: any;
  title?: string;
  onPressLeft?: any;
  onPressRight?: any;
  visibleLeft?: boolean;
  visibleRight?: boolean;
  leftImageName?: any;
  rightImageName?: any;
  leftMenu?: any;
  goBack?: boolean;
}

interface CustomHeaderState {}

class CustomHeader extends Component<CustomHeaderProps, CustomHeaderState> {
  public static defaultProps: Partial<CustomHeaderProps> = {
    visibleLeft: true,
    visibleRight: true,
  };

  render() {
    const {
      title,
      onPressLeft,
      visibleLeft,
      visibleRight,
      leftImageName,
      leftMenu,
      goBack
    } = this.props;

    return (
      <View>
        <View style={styles.container}>
          {leftMenu ? (
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.leftImageView}
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}>
                <Image
                  style={styles.menuIconImageDimension}
                  source={require('../../assets/images/Group4.png')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          {visibleLeft ? (
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.leftImageView}
                onPress={onPressLeft}>
                <Image source={leftImageName} />
              </TouchableOpacity>
            </View>
          ) : null}
           {goBack ? (
          <View style={styles.imageContainer} >
              <TouchableOpacity
                style={styles.leftImageView}
                onPress={() => this.props.navigation.goBack()}
              >
                  <Image
                  style={styles.menuIconImageDimension}
                  source={require('../../assets/images/Group5.png')}
                />
              </TouchableOpacity>
          </View>
            ) : null}

          <View style={styles.centerContainer}>
            <Text style={styles.title}> {title} </Text>
          </View>

          <View style={styles.imageContainer}>
            {visibleRight ? (
              <TouchableOpacity
                style={styles.rightImageView}>
                <Image
                  source={require('../../assets/images/Group5.png')}
                />
              </TouchableOpacity>
            ) : null}
          </View>
         
        </View>
      </View>
    );
  }
}



export default CustomHeader;
