import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootNavigation from './stacks/RootNavigation';
import Feed from './stacks/FeedStack';
import ProfileStack from './stacks/ProfileStack.js';
import Map from '../screens/Map';
import { Entypo, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { colors } from '../themes/colors'


const Tab = createBottomTabNavigator()
const TabNav = () => {
	return (
		<Tab.Navigator initialRouteName='root' screenOptions={{ headerShown: false, title: "", tabBarStyle: styles.tabNav }}>
			<Tab.Screen
				name='root'
				component={RootNavigation}
				options={{
					tabBarIcon: ({ focused }) => (
						<Entypo name="home" size={30} color={focused ? colors.poppy : colors.isabelline} />
					)
				}} />
			<Tab.Screen
				name='feed'
				component={Feed}
				options={{
					tabBarIcon: ({ focused }) => (
						<FontAwesome name="heart" size={24} color={focused ? colors.poppy : colors.isabelline} />
					)
				}}
			/>
			<Tab.Screen
				name='map'
				component={Map}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather name="map" size={24} color={focused ? colors.poppy : colors.isabelline} />
					)
				}}
			/>
			<Tab.Screen
				name='profile'
				component={ProfileStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<AntDesign name="user" size={24} color={focused ? colors.poppy : colors.isabelline} />
					)
				}}
			/>

		</Tab.Navigator>
	)
}

export default TabNav;

const styles = StyleSheet.create({
	tabNav: {
		backgroundColor: colors.black,
		paddingTop: 6,
		height: '9%',
		borderTopColor: colors.isabelline,
	}
})