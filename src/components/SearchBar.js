import { View, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react';
import { colors } from '../themes/colors';
import { EvilIcons } from '@expo/vector-icons'


const SearchBar = () => {
  const [text, setText] = useState("");


  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        placeholder='Restaurantes, comidas...'
        placeholderTextColor={colors.isabelline}
        onChangeText={value => setText(value)}
        style={styles.TextInput}
      />
      <View style={styles.butonContainer}>
        <Pressable style={styles.button}>
          <EvilIcons name="search" size={45} color={colors.isabelline} style={styles.searchIcon} />
        </Pressable>
      </View>
    </View>

  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 340,
    paddingHorizontal:10,
    paddingVertical:4,
    backgroundColor: colors.black,
    color: colors.isabelline,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.isabelline,
  },
  TextInput: {
    fontSize: 20,
    borderWidth: 1,
  },
  butonContainer:{
    paddingBottom:9,
    alignItems:'center',
  },
})