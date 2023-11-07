import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import Dashboard from '../../screens/Dashboard'


const Stack = createNativeStackNavigator();
const ProfileStack = () => {
	return (
		<Stack.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='dashboard' component={Dashboard} />
			<Stack.Screen name='Profile' component={Profile} />
		</Stack.Navigator>
	)
}

export default ProfileStack;