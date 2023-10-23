import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const RestaurantByCategory = () => {
  const navigation = useNavigation();
  
  
  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View>

      <Pressable onPress={goBack}>
        <Text>ir Atrás</Text>
      </Pressable >
      <Text>RestaurantByCategory</Text>

    </View>
  )
}

export default RestaurantByCategory;