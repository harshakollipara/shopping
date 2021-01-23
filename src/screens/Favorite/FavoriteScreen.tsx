import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface FavoritesProps {
}
interface FavoritesState {}

export default class FavoriteScreen extends Component<FavoritesProps, FavoritesState> {
  constructor(FavoritesProps: FavoritesProps) {
    super(FavoritesProps);
  }
  render() {

    return (
      <View>
       <Text>Hi Favorite</Text>
      </View>
    );
  }
}
