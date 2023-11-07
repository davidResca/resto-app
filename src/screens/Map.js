import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../themes/colors';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps'



const Map = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);

  const initialRegion = {
    latitude: -38.95131977217179,
    longitude: -68.05915676471234,
    latitudeDelta: 0.10,
    longitudeDelta: 0.10,
  };
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('El permiso para acceder a la ubicación fué denegado');
      return;
    }
    const location = await Location.getCurrentPositionAsync({})
    setLocation(location);
  }

  useEffect(() => {
    getLocation();
  }, [location, errorMsg])

  if (!location) {
    return (<View><Text>Cargando</Text></View>)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MapView
          pointerEvents={true}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={initialRegion}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />

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
    height: '100%'
  }
})