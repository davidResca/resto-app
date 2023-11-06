import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../screens/Feed';
import Story from '../../screens/Story';


const Stack = createNativeStackNavigator();
const FeedStack = () => {
	return (
		<Stack.Navigator initialRouteName='Feed' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Feed' component={Feed} />
			<Stack.Screen name='Story' component={Story} />
		</Stack.Navigator>
	)
}

export default FeedStack;
