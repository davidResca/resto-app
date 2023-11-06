import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../redux/homeSlice'

const CategoryCard = ({ item }) => {
  //console.log(item);

  const navigation = useNavigation()

  const dispatch = useDispatch();

  const handlePress = () => {
    navigation.navigate('restaurantByCategory')
    dispatch(setCategorySelected(item.food));
  }

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={{uri: item.photo}} style={styles.image} />
      <Text style={styles.text}>{item.food}</Text>
    </Pressable>
  )
}

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: .5,
    borderColor: 'white',
    margin: 4,
    backgroundColor: 'white',
    borderRadius: 14,
    height: 180,
    width: 180,
    position: 'relative',
    overflow: 'hidden'
  },
  text: {
    padding: 6,
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: 0,
    color: 'white',
    zIndex: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 14,
    width: '100%',
    height: '100%',

  }
})
