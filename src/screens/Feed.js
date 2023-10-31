import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  )
}

export default Feed;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.black
  }
})