import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../themes/colors';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps'
import { useSelector } from 'react-redux';


const Map = () => {
  const [errorMsg, setErrorMsg] = useState();
  const [location, setLocation] = useState();
  const getLatLong = async () => {

    const { status } = await Location.requestForegroundPermissionsAsync();


    if (status !== 'granted') {
      setErrorMsg('El permiso para acceder a la ubicación fué denegado');
      return;
    }

    const location = await Location.getCurrentPositionAsync({})
    setLocation(location);
  };

  console.log(location);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MapView style={styles.map} />
        <Pressable onPress={getLatLong}>
          <Text>OBTENER COORDENADAS</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.viridian
  },
  map: {
    width: '100%',
    height: '90%'
  }
})