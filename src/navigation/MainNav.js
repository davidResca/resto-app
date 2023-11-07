import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthNav from './stacks/AuthNav';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MainNav = () => {
  const [checkedUser, setCheckedUser] = useState(null);
  const user = useSelector(state => state.authSlice.user);


  useEffect(() => {
    const checkUser = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userMail');
        const userIdToken = await AsyncStorage.getItem('userIdToken');
        userEmail ? setCheckedUser(userEmail) : setCheckedUser(user);

        console.log('EN MAIN NAV', userEmail);
        console.log('useSelector user', user);
        console.log('User checked', checkedUser);
      } catch (e) {
        console.error(error);
      }
    }
    checkUser();
  }, [user])

  return (
    <NavigationContainer >
      {
        checkedUser ? <TabNav /> : <AuthNav />
      }
    </NavigationContainer>
  )
}

export default MainNav