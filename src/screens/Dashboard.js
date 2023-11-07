import { View, Text, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    <View>
      <Header title={'Profile'}/>
      <View>
          {isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
              <ActivityIndicator style={{
                flex: 1, marginTop: 10
              }} size="large" color='#0000ff' />
            </View>
          ) : (
            <Image
              style={styles.profileImg}
              source={{ uri: data ? data.image : defaultImg }}
            />
          )}
        </View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard