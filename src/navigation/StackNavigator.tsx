import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrderScreen from "../screens/Orders/OrderScreen";
import FavoriteScreen from "../screens/Favorite/FavoriteScreen";
import CartScreen from "../screens/MyCart/CartScreen";
import { TabNavigator } from "./TabNavigator";


const Stack = createStackNavigator();

export const defaultOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator  initialRouteName="Home" screenOptions = {{
        cardStyle: { backgroundColor: '#FFFFFF' }
    }}>
      <Stack.Screen name="Orders" component={OrderScreen} options={defaultOptions} />
      <Stack.Screen name="Favorites" component={FavoriteScreen} options={defaultOptions} />
      <Stack.Screen name="MyCart" component={CartScreen} options={defaultOptions} />
      <Stack.Screen name="Home" component={TabNavigator} options={defaultOptions}   />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };