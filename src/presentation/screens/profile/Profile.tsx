import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const localStyles = StyleSheet.create({
    profileView: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top,
    },
  });

  return (
    <View style={ localStyles.profileView }>
        <Text>Profile</Text>

        <PrimaryButton
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer() ) }
          label="Abrir menu"
        />
    </View>
  );


};

