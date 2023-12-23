# Resto App

Resto es una aplicación desarrollada en React Native + Expo.

# Descripción

RestoApp es una aplicación que ayudará a sus usuarios a encontrar propuestas gastronómicas dentro de la 
ciudad de Nequén (Provincia homónima). 

En este MVP es posible realizar una búsqueda por plato deseado (el programa buscará en el menú del restaurant en la base de datos proporcionada por firebase) o podrá seleccionar una categoría ofrecida por la aplicación. En el detalle de restaurante se mostrará nombre del mismo, ubicación en el mapa (MapView de rnative) y acceder al instagram del restaurante seleccionado (si tiene). 
 
Incluye registro y login de usuario con persistencia de datos con AsyncStorage y es posible acceder al dashboard del usuario (en construcción) y luego al screen profile donde podrá:
    
    . Seleccionar foto de perfil
    . Tomar foto de perfil
    . Cerrar Sesión

# Lista de dependencias

    "@expo/webpack-config": "^19.0.0",
    "@react-native-async-storage/async-storage": "1.18.2",
    "@react-navigation/bottom-tabs": "^6.5.10",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.15",
    "@reduxjs/toolkit": "^1.9.7",
    "expo": "~49.0.15",
    "expo-font": "~11.4.0",
    "expo-image-picker": "~14.3.2",
    "expo-location": "~16.1.0",
    "expo-status-bar": "~1.6.0",
    "firebase": "^10.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.72.6",
    "react-native-dotenv": "^3.4.9",
    "react-native-maps": "1.7.1",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0",
    "react-native-web": "~0.19.6",
    "react-redux": "^8.1.3"
    
# Plugins Babel

Se utilizaron variables de entorno para la conexión con firebase.

    plugins:[
        ["module:react-native-dotenv", {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env",
        }]
    ]


# Consideraciones finales

Este es un proyecto desarrollado para el curso de desarrollo de aplicaciones dictado por CoderHouse. Un agradecimiento al staff de la comisión, fueron guía fundamental para este proyecto. 