import { useFonts } from 'expo-font';
import { fonts } from './global/fonts';
import MainNav from './src/navigation/MainNav';


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  };
  
  return (
      <MainNav />
  );
}
