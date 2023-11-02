import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useGetCategoryDataQuery } from '../services/firebaseAPI';
import CategoryCard from '../components/CategoryCard';
import { colors } from '../themes/colors';

const RestaurantCategories = () => {
  const { data } = useGetCategoryDataQuery();
  // console.log(data);
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={
            ({ item }) => (<CategoryCard item={item} />)
          }
          numColumns={2}
          style={styles.categoryContainer}
        />
      </View>
    </View>
  )
}

export default RestaurantCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  categoryContainer: {
    justifySelf: 'center',
    marginTop: 20,
  }
})