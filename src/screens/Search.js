import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { useGetProductDataQuery } from '../services/firebaseAPI';
import { useSelector } from 'react-redux';
import RestaurantCard from '../components/RestaurantCard';
import { colors } from '../themes/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [filteredData, setFilteredData] = useState(null);
  const searchPrompt = useSelector(state => state.homeSlice.userSearch);
  const { data } = useGetProductDataQuery()
  const navigation = useNavigation();

  useEffect(() => {
    if (data) {
      // Filtra los datos y almacena el resultado en el estado local
      const filteredData = data.filter(p => p.menu.includes(searchPrompt));
      setFilteredData(filteredData);
    }
  }, [data, searchPrompt]);

  const handleGoBack = () => {
    navigation.goBack();
  }


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </Pressable>
        <SearchBar />
      </View>
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={
            ({ item }) => (<RestaurantCard item={item} />)
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.black,
  }
})