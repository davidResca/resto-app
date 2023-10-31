import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.black
  }
})