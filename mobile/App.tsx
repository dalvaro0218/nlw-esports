import { StatusBar } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';


import { Backgound } from './src/components/backgound';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  return (
    <Backgound>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
        {fontsLoaded ? <Home /> : <Loading/>}
    </Backgound>
  );
}
