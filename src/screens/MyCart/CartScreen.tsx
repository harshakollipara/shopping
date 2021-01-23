import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface CartsProps {
}
interface CartsState {}

export default class FavoriteScreen extends Component<CartsProps, CartsState> {
  constructor(CartsProps: CartsProps) {
    super(CartsProps);
  }
  render() {

    return (
      <View>
       <Text>Hi cart</Text>
      </View>
    );
  }
}
