import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthNav from './stacks/AuthNav';
import { useSelector } from 'react-redux';

const MainNav = () => {
  const user = useSelector(state => state.authSlice.user);

  return (
    <NavigationContainer >
      {
        user ? <TabNav /> : <AuthNav />
      }
    </NavigationContainer>
  )
}

export default MainNav