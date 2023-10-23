import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootNavigation from './stacks/RootNavigation';
import Feed from './stacks/FeedStack';
import ProfileStack from './stacks/ProfileStack.js';

const Tab = createBottomTabNavigator()
const TabNav = () => {
	return (
		<Tab.Navigator initialRouteName='root'/* screenOptions={{ headerShown: false }} */>
			<Tab.Screen name='root' component={RootNavigation} />
			<Tab.Screen name='feed' component={Feed} />
			<Tab.Screen name="profile" component={ProfileStack} />
		</Tab.Navigator>
	)
}

export default TabNav;