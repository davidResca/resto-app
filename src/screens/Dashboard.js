import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../themes/colors'


export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Dashboard'} screen={'Profile'} />
      <View>
        <Text style={styles.text}>Dashboard</Text>
        <Text style={styles.text}>Click en foto de perfil para acceder a profile</Text>
        <Text style={styles.text}>En construcción...</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.black,
  },
  text: {
    color: colors.isabelline,
    fontSize: 30,
  }
})
