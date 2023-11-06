import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../themes/colors';
import { login } from "../firebase/firebase_auth";
import { useDispatch } from 'react-redux';
import { setUser, setIdToken } from '../redux/authSlice';


const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    console.log('intentando login...')

    try {
      const response = await login({ email, password })
      const userMailResponse = response.user.email;
      console.log(response);
      dispatch(setUser(userMailResponse))
      dispatch(setIdToken(response._tokenResponse.idToken))
    } catch (e) {
      console.error('error', e)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.splashLogo}>resto</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.screenTitle}>Inicia sesión</Text>
        <TextInput
          placeholder='Ingrese su email'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputForm}
        />
        <TextInput
          placeholder='Ingrese su contraseña'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputForm}
        />
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text >Iniciar sesión</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('register')} >
          <Text style={styles.goToLogin}>No tenés una cuenta? Regístrate aquí</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.poppy,
    flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 10,
  },
  splashLogo: {
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 64,
    textTransform: 'capitalize',
    fontWeight: 'light'
  },
  screenTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
  },
  formContainer: {
    gap: 10,
    width: 250,
  },
  inputForm: {
    textAlign: 'center',
    backgroundColor: colors.isabelline,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    backgroundColor: colors.viridian,
    borderRadius: 5,
  },
  goToLogin: {
    textAlign: 'center',
    marginTop: 16,
    color: colors.isabelline,
  }
})