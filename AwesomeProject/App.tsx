import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Contacts from './src/Contact';
import ProfileContact from './src/ProfileContact';
import Favourites from './src/Favourites';
import store from './src/Store';

const Stack = createStackNavigator();

function ContactScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contacts} />
            <Stack.Screen name="ProfileContact" component={ProfileContact} />
        </Stack.Navigator>
    );
}

function FavouritesScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favourites" component={Favourites} />
            <Stack.Screen name="ProfileContact" component={ProfileContact} />
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Contact" component={ContactScreen} />
                    <Tab.Screen name="Favourites" component={FavouritesScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
