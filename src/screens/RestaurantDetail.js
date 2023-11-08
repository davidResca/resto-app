import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Linking, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { colors } from '../themes/colors';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const RestaurantDetail = ({ route }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const { item } = route.params;

  const handleLinkMedia = () => {
    const { instagram } = item.social_media;
    if (instagram) {
      Linking.openURL(instagram)
    } else {
      return;
    }
  }

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

  const lat = useSelector(state => state.locationSlice.latitude)
  const long = useSelector(state => state.locationSlice.longitude)

  if (!location) {
    return (<View><Text>Cargando</Text></View>)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: item.img }}
        style={styles.img}
      />
      <View style={styles.restoDataContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.nombre_restaurant}</Text>
          <Text style={styles.text}>{item.direccion}</Text>
        </View>
        <View style={styles.rrssContainer}>
          <Pressable style={styles.button}>
            <FontAwesome name="whatsapp" size={24} color="black" />
            <Text>WhatsApp</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleLinkMedia}>
            <FontAwesome name="instagram" size={24} color="black" />
            <Text>Instagram</Text>
          </Pressable>
        </View>
      </View>
      <MapView
        pointerEvents={true}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={initialRegion}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
      >
        <Marker coordinate={{ latitude: lat, longitude: long }} />
      </MapView>
    </SafeAreaView>
  )
}

export default RestaurantDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.viridian,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restoDataContainer: {
    gap: 20,
  },
  img: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
  },
  map: {
    width: '100%',
    height: '50%'
  },
  button: {
    padding: 4,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center'
  },
  rrssContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 22,
    padding: 6,
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'center',
  }
});