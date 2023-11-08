
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import RestaurantByCategory from '../../screens/RestaurantByCategory';
import RestaurantCategories from '../../screens/RestaurantCategories';
import RestaurantDetail from '../../screens/RestaurantDetail';
import Search from '../../screens/Search';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
	return (
		<Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='home' component={Home} />
			<Stack.Screen name='restaurantCategories' component={RestaurantCategories} />
			<Stack.Screen name='restaurantByCategory' component={RestaurantByCategory} />
			<Stack.Screen name='restaurantDetail' component={RestaurantDetail} />
			<Stack.Screen name='searchResults' component={Search} />
		</Stack.Navigator>
	)
}

export default RootNavigation