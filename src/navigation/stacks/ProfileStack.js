import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import Story from '../../screens/Story';


const Stack = createNativeStackNavigator();
const ProfileStack = () => {
	return (
		<Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='story' component={Story} />
		</Stack.Navigator>
	)
}

export default ProfileStack;