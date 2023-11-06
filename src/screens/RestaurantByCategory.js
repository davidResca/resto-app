import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useGetProductDataQuery } from '../services/firebaseAPI'
import { useSelector } from 'react-redux';
import RestaurantCard from '../components/RestaurantCard';
import { colors } from '../themes/colors'



const RestaurantByCategory = () => {
  const navigation = useNavigation();
  const { data } = useGetProductDataQuery();
  const item = useSelector(state => state.homeSlice.categorySelected);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      // Filtra los datos y almacena el resultado en el estado local
      const filteredData = data.filter(p => p.categoria.includes(item));
      setFilteredData(filteredData);
      console.log(JSON.stringify(filteredData, null, " "))
    }
  }, [data, item]);

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => (<RestaurantCard item={item} />)
        }
      />
      <Pressable onPress={goBack}>
        <Text>ir Atrás</Text>
      </Pressable >
      <Text>RestaurantByCategory</Text>
    </View>
  )
}

export default RestaurantByCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  }
})