import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';

export const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {

    navigation.setOptions({
      title: params.name,
    });

  });


  return (
    <View style={ globalStyles.container }>
        <Text>Product</Text>
        <Text style={ localStyle.productText }>{params.id} - {params.name}</Text>
    </View>
  );
};

const localStyle = StyleSheet.create({
  productText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
