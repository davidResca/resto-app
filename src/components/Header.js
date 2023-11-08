import { StyleSheet, Text, View, Image, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'
import { useGetImageQuery } from '../services/firebaseAPI';
import { colors } from '../themes/colors'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, screen }) => {
  const { data, isLoading, error, refetch } = useGetImageQuery();
  const navigation = useNavigation();

  const defaultImg = 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png';

  const handleProfileButton = () => {
    navigation.navigate(screen)
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator style={{
            flex: 1, marginTop: 10
          }} size="large" color='#0000ff' />
        </View>
      ) : (
        <Pressable onPress={handleProfileButton}>
          <Image
            style={styles.profileImg}
            source={{ uri: data ? data.image : defaultImg }}
          />
        </Pressable>
      )}
    </View>
  )
}
export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.black,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: colors.isabelline,
    fontSize: 22,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  }
})
