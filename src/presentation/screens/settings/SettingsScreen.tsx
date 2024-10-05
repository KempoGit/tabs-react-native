import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  
  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container } >
        <Text>Settings</Text>

        <PrimaryButton
          onPress={ () => navigation.goBack() }
          label="Regresar"
        />

        <PrimaryButton
          onPress={ () => navigation.dispatch( StackActions.popToTop() ) }
          label="Regresar al Home"
        />
    </View>
  );
};
