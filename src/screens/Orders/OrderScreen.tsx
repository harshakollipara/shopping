import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface OrdersProps {
}
interface OrdersState {}

export default class OrderScreen extends Component<OrdersProps, OrdersState> {
  constructor(OrdersProps: OrdersProps) {
    super(OrdersProps);
  }
  render() {

    return (
      <View>
       <Text>Hi Order</Text>
      </View>
    );
  }
}
