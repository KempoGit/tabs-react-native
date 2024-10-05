import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/Profile';
import { globalColors } from '../theme/theme';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

    const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
        drawerContent={ (props) => <CustomDrawerContent { ...props } />}
        screenOptions={{
            headerShown: false,
            drawerType: (dimensions.width > 750) ? 'permanent' :'slide',

            drawerActiveBackgroundColor: globalColors.primary,
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: globalColors.primary,
            drawerItemStyle: {
                borderRadius: 100,
                paddingHorizontal: 20,
            },
        }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={ StackNavigator } /> */}
      <Drawer.Screen name="Tabs" component={ BottomTabNavigator } />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={ localStyles.photo } />

            <DrawerItemList { ...props } />

            {/* <Text>Hola mundo</Text> */}
        </DrawerContentScrollView>
    );
};

const localStyles = StyleSheet.create({
    photo: {
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
    },
});
