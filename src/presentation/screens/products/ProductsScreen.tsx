import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
  { id: 7, name: 'Producto 7' },
];

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  return (
    <View style={ globalStyles.container }>
        <Text style={localStyle.dataText}>Productos</Text>

        <FlatList
          data={products}
          renderItem={ ( {item} ) => (
            <PrimaryButton
              onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})}
              label={ item.name }
            />
          )}
        />

        <Text style={localStyle.dataText}>Ajustes</Text>
        <PrimaryButton
          onPress={() => navigation.navigate('Settings')}
          label="Ajustes"
        />
    </View>
  );
};

const localStyle = StyleSheet.create({
  dataText: {
    marginBottom: 10,
    fontSize: 30,
  },
});
