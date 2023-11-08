import { Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker'
import { useGetImageQuery, usePutImageMutation } from '../services/firebaseAPI';
import Header from '../components/Header';
import { colors } from '../themes/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIdToken, setUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';


const Profile = () => {

  const [putImage, result] = usePutImageMutation();
  const { data, isLoading, refetch } = useGetImageQuery();
  const dispatch = useDispatch();

  const defaultImg = 'https://i.etsystatic.com/29388859/r/il/1852b1/3120127459/il_340x270.3120127459_kz1z.jpg';

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    })

    if (!result.canceled) {
      await putImage({ image: `data:image/jpeg;base64,${result.assets[0].base64}` });
    }

    refetch();
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      //alert('no camera permission granted');
      return;
    } else {
      let result = await ImagePicker.launchCameraAsync({
        base64: true,
      });
      //console.log(`data:image/jpeg;base64,${result.assets[0].base64}`);
      if (!result.canceled) {
        await putImage({ image: `data:image/jpeg;base64,${result.assets[0].base64}` })
      };
      refetch();
    }
  }

  const closeSession = () => {
    AsyncStorage.removeItem('userMail');
    dispatch(setUser(null));
    dispatch(setIdToken(null));
  }

  return (
    <SafeAreaView style={styles.profileContainer}>
      <Header title={'Perfil'} screen={'Dashboard'} />
      <View >
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


        <View style={styles.profileButtonContainer}>
          <Pressable style={styles.profileButton} onPress={pickImage}>
            <Text style={styles.profileButtonText}>cambiar foto</Text>
          </Pressable>
          <Pressable style={styles.profileButton} onPress={openCamera}>
            <Text style={styles.profileButtonText}>Tomar Foto</Text>
          </Pressable>
          <Pressable style={styles.profileButton} onPress={closeSession}>
            <Text style={styles.profileButtonText}>Cerrar Sesión</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  profileImg: {
    marginTop: 50,
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  profileButtonContainer: {
    marginTop: 20,
    gap: 10,
  },
  profileButton: {
    padding: 4,
    borderWidth: .5,
    backgroundColor: colors.viridian
  },
  profileButtonText: {
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
  }
})