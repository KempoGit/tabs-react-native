import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/Profile';
import { AboutScreen } from '../screens/about/About';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { globalColors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = (props: any) => {

  const { key } = props;

  return (
    <>
        <HamburgerMenu/>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: globalColors.primary,
            tabBarIndicatorStyle: { backgroundColor: globalColors.primary},
          }}>
            <Tab.Screen key={key} {...props} name="Perfil" component={ProfileScreen} />
            <Tab.Screen key={key} {...props} name="About" component={AboutScreen} />
        </Tab.Navigator>
    </>
  );
};
