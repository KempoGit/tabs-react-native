import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';


export const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer() ) }
                    >
                    <IonIcon name="menu-outline" color={globalColors.primary} />
                </Pressable>
            ),
        });

    });


  return (<></>);
};
