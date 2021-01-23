import React,{Component} from 'react';
import {View,FlatList,Text,Image} from 'react-native';

import styles from './CustomList.Style';

 interface Props{
    Details?: any;  
}

type state = {Details:any}
 class CustomList extends Component<Props,state> {
    constructor(props:Props){
        super(props);
        this.state = { 
     Details: [
        {
            "id":0,
            "name":"Emma Fernandes",
            "address":"21st street",
            "distance":4,
            "ratings":0,
            "gender":"F",
            "image":"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
            "id":1,
            "name":"Jessica Clark",
            "address":"5th Block, 14th street",
            "distance":10,
            "ratings":0,
            "gender":"F",
            "image":"https://annemariesegal.files.wordpress.com/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=750"
        },
        {
            "id":2,
            "name":"Antony Joshua",
            "address":"8th Block, 5th street",
            "distance":6,
            "ratings":0,
            "gender":"M",
            "image":"https://i.pinimg.com/236x/47/e2/93/47e293c6d95782496d0832cbbaf48570--business-headshots-professional-headshots.jpg"
        },
        {
            "id":3,
            "name":"Kitt Hams",
            "address":"23rd Block, 2nd street",
            "distance":8,
            "ratings":0,
            "gender":"M",
            "image":"https://www.tobiaskey.com/wp-content/gallery/business-headshots/IMG_0126.jpg"
        },
        {
            "id":4,
            "name":"christopher Adam",
            "address":"7th Block, 3rd street",
            "distance":4,
            "ratings":0,
            "gender":"M",
            "image":"https://vengreso.com/wp-content/uploads/2016/03/LinkedIn-Profile-Professional-Picture-Sample-Bernie-Borges.png"
        }
    ]
        }
    }

   itemSeparator = () => {
        return (
          <View style={styles.seperator}/>
        );
      };
 render(){
    return (
        <View style={styles.main} >
            <FlatList 
        data = {this.state.Details}
        ItemSeparatorComponent = {this.itemSeparator}
        renderItem = {({item}) => (
            <View style={styles.container} >
           <Image source={{uri:item.image}} style={styles.photo} />
           <View style={styles.text}>  
            <Text style={styles.expertName}>
                {item.name}
            </Text>
            <Text style={styles.expertAddress}>
                {item.address}
            </Text>
            </View>
            </View>
        )}
        keyExtractor ={(item,index) => item.id}
        />
        </View>
    );
    }
};
export default CustomList;