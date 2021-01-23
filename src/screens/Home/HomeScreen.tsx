import React, {Component} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import CustomCard from '../../component/custom-card/custom-card';
import styles from './style';
import CustomSearchField from '../../component/custom-search-field/custom-search-field';
import CustomImageSlider from '../../component/custom-image-slider/custom-image-slider';
import CustomHeader from '../../component/custom-header/custom-header';
import I18n from '../../translation/indexTrans';
import DropdownLanguage from '../../translation/dropdownmenu'

interface HomeProps {
  navigation: any;
}
interface HomeState {
  languageSelected: any

}

export default class HomeScreen extends Component<HomeProps, HomeState> {
  constructor(HomeProps: HomeProps) {
    super(HomeProps);
    this.state = {
      languageSelected: 'en'
  }
  }
  onChangeLanguage(languageSelected: any) {
    this.setState({
        languageSelected
    })
    I18n.locale = languageSelected
}
  render() {
    const { languageSelected } = this.state

    return (
     
      <View style={styles.Container}>
      <CustomHeader
        leftMenu ={true}
         visibleRight ={true}
         title = {I18n.t('homescreen.user')}
       />
        <ScrollView showsVerticalScrollIndicator={false}>
          
        <DropdownLanguage language={languageSelected} onChangeLanguage={this.onChangeLanguage.bind(this)}></DropdownLanguage>
       <Text style={styles.textContainer} >{I18n.t('homescreen.welcome')}</Text>
        <CustomSearchField placeholder = {I18n.t('homescreen.search')} onChangeText={(value: any) => console.log('hi')} />
       
       
       <View style={styles.cardContainer}>
       <CustomCard style={styles.card}>
         
          <Image source={require('../../assets/images/icon-01.png')} style={styles.cardImageOne} />
         <View>
        <Text style={styles.textTop}>{I18n.t('homescreen.complete')}</Text>
        <Text style={styles.textOne}>{I18n.t('homescreen.registration')}</Text>
        <Text style={styles.textTwo}>{I18n.t('homescreen.update')}</Text>
        </View>
        <Image source={require('../../assets/images/icon-02.png')} style={styles.cardImageTwo} /> 
       </CustomCard>
       </View>
       <View style={styles.textMain}>
       <Text style={ styles.textPromotions}>{I18n.t('homescreen.promotions')}</Text>
       <Text style={ styles.textSeeAll}>{I18n.t('homescreen.seeall')}</Text>
       </View>
       <CustomImageSlider />
       <View style={styles.groceryContainer}>
         <View>
         <Image source={require('../../assets/images/Vegetables.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.vegetables')}</Text>
         </View>
        <View>
         <Image source={require('../../assets/images/Fruits.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.fruits')}</Text>
         </View>
         <View>
         <Image source={require('../../assets/images/Cleaning.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.cleaning')}</Text>
         </View>
        <View>
         <Image source={require('../../assets/images/Grocery.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.grocery')}</Text>
         </View>
       </View>
       <View style={styles.groceryContainer}>
         <View>
         <Image source={require('../../assets/images/EdibleOils.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.edibleoils')}</Text>
         </View>
        <View>
         <Image source={require('../../assets/images/Meat.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.meat')}</Text>
         </View>
         <View>
         <Image source={require('../../assets/images/Fish.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.fish')}</Text>
         </View>
        <View>
         <Image source={require('../../assets/images/Spice.png')} />
         <Text style= {styles.textStyle}>{I18n.t('homescreen.spice')}</Text>
         </View>
       </View>
       </ScrollView>

      </View>
       
     
    );
  }
}
