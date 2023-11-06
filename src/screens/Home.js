import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useGetCategoryDataQuery } from '../services/firebaseAPI.js'
import { colors } from '../themes/colors'
import SearchBar from '../components/SearchBar'
import Categories from "../components/Categories";

const Home = () => {
  const navigation = useNavigation();

  const { data } = useGetCategoryDataQuery();

  const handlePress = () => {
    navigation.navigate('restaurantCategories')
  }

  if (!data) {
    return (<View><Text>ESPERANDO</Text></View>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>¡Hola!</Text>
        <Text style={styles.text}>¿Qué te gustaría comer hoy?</Text>
      </View>
      <SearchBar />

      <View>
        <Text style={{ ...styles.text, textAlign: 'left', padding: 3 }}>Categorias</Text>
        <ScrollView horizontal={true} >
          {data.map((el, index) => (el.id <= 4 && <Categories item={el} key={index} />))}
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Ver todas</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 45,
    backgroundColor: colors.black,
  },
  textContainer: {
    padding: 2,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.isabelline,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.isabelline,
  },
  button: {
    backgroundColor: colors.isabelline,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 4,
    borderRadius: 14,
    height: 300,
    width: 150,
    position: 'relative',
    overflow: 'hidden'
  },
  buttonText: {
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
  }
})