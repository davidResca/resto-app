/* import 'react-native-gesture-handler'; */
import { NavigationContainer } from '@react-navigation/native';
//import DrawerNav from './src/navigation/Drawer';
import TabNav from './src/navigation/TabNav';



export default function App() {
  
  return (
      <NavigationContainer>
        {/* <DrawerNav /> */}
        <TabNav />
      </NavigationContainer>
  );
}
