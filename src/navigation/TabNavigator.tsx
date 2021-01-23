import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home/HomeScreen";
import OrderScreen from "../screens/Orders/OrderScreen";
import FavoriteScreen from "../screens/Favorite/FavoriteScreen";
import CartScreen from "../screens/MyCart/CartScreen";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Orders') {
                        iconName = focused ? 'monitor-dashboard' : 'monitor-dashboard';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'heart-outline' : 'heart-outline';
                    } else if (route.name === 'MyCart') {
                        iconName = focused ? 'cart-outline' : 'cart-outline';

                    } 
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                // activeTintColor: 'tomato',
                // inactiveTintColor: 'gray',
            }}

        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Orders" component={OrderScreen} />
            <Tab.Screen name="Favorites" component={FavoriteScreen} />
            <Tab.Screen name="MyCart" component={CartScreen} />
        </Tab.Navigator>
    );
}
