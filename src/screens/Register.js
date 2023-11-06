import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../themes/colors';
import { register } from "../firebase/firebase_auth";

const Register = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    console.log('registrando...');

    try {
      const response = await register({ email, password });
      console.log(response);
      navigation.navigate('login')
    } catch (e) {
      console.error('error', e);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.splashLogo}>resto</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.screenTitle}>Regístrate aquí</Text>
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
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text >Registrarse</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('login')} >
          <Text style={styles.goToLogin}>Ya tenés una cuenta? Iniciar Sesión</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 10,
  },
  splashLogo: {
    fontFamily: 'Pacifico',
    color: colors.viridian,
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