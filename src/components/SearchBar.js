import { View, TextInput } from 'react-native'
import React from 'react'

const SearchBar = () => {
  const [text, setText] = useState("");

  
  return (
    <View>
        <TextInput
          value={text}
          placeholder='Restaurantes, comidas...'
          onChangeText={value => setText(value)}
        />
        <Pressable>
          <EvilIcons name="search" size={24} color="black" />
        </Pressable>
      </View>

  )
}

export default SearchBar