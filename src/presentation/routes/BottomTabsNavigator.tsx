import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { TopTabNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: globalColors.background,
        }}

        screenOptions={{
            // headerShown: false,
            tabBarActiveTintColor: globalColors.primary,
            tabBarLabelStyle: {
                margin: 5,
            },
            headerStyle: {
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent',
            },
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
        }}
    >
      <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<IonIcon name="rocket-outline" size={25} color={color} />) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<IonIcon name="image-outline" size={25} color={color} />) }} component={TopTabNavigator} />
      <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<IonIcon name="car-outline" size={25} color={color} />) }} component={StackNavigator} />
    </Tab.Navigator>
  );
};
