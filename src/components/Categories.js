import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { setCategorySelected } from '../redux/homeSlice'
import { useDispatch } from 'react-redux'


const Categories = ({item}) => {
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

export default Categories

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderColor: 'white',
    margin: 4,
    backgroundColor:'white',
    borderRadius:14,
    height:300,
    width: 300,
    position: 'relative',
    overflow: 'hidden'
  },
  text: {
    padding: 6,
    textTransform:'capitalize',
    position: 'absolute',
    bottom: 0,
    color: 'white',
    zIndex: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  image: {
    resizeMode: 'cover',
    borderRadius:14,
    width: 300,
    height:300,
  }
})