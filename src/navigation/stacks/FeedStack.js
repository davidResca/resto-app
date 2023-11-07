import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../screens/Feed';



const Stack = createNativeStackNavigator();
const FeedStack = () => {
	return (
		<Stack.Navigator initialRouteName='Feed' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Feed' component={Feed} />
		</Stack.Navigator>
	)
}

export default FeedStack;
