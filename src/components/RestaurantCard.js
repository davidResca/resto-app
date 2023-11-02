import React from 'react'
import { Linking, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const RestaurantCard = ({ item }) => {

  const handleLink = (url) => {
    console.log(url);
    if (url) {
      Linking.openURL(url)
    } else {
      return;
    }
  }

  return (
    <View>

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>{item.nombre_restaurant}</Text>
          <Text style={styles.text}>{item.direccion}</Text>
        </View>
        <Image
          source={{ uri: item.img }}
          style={styles.img}
        />
        <View style={styles.rrssContainer}>
          <Pressable onPress={() => handleLink(item.social_media.instagram)}>
            <Ionicons name="logo-instagram" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    marginVertical:8,
  },
  headerContainer:{
    width:'100%',
    position:'absolute',
    zIndex: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  rrssContainer:{
    paddingVertical:10,
    width:'100%',
    position:'absolute',
    bottom: 0,
    right:0,
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  text: {
    color: 'white',
  },
  img: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  }
})