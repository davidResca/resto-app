import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthNav from './stacks/AuthNav';

const MainNav = () => {

  /* const user = ""; */


  return (
    <NavigationContainer >
      <TabNav />
      {/* {
      <AuthNav />
        user ? <TabNav /> : <AuthNav />
      } */}
    </NavigationContainer>
  )
}

export default MainNav