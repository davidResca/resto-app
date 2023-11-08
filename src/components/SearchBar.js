import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../themes/colors';
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setUserSearch } from '../redux/homeSlice';
import { useNavigation } from '@react-navigation/native';




const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSearch = () => {
    dispatch(setUserSearch(text))
    navigation.navigate('searchResults');

  }

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        placeholder='¿Qué te gustaría comer hoy?'
        placeholderTextColor={colors.isabelline}
        onChangeText={value => setText(value.toLowerCase())}
        style={styles.TextInput}
      />
      <View style={styles.butonContainer}>
        <Pressable style={styles.button} onPress={handleSearch}>
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
    borderWidth: .5,
    borderRadius: 12,
    borderColor: colors.isabelline,
  },
  TextInput: {
    fontSize: 20,
    borderWidth: 1,
    color: colors.isabelline,
  },
  butonContainer:{
    paddingBottom:9,
    alignItems:'center',
  },
})