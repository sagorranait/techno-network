import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    // Load the custom font asynchronously
    async function loadFont() {
      await Font.loadAsync({
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <>
      <Navigation/>
      <StatusBar style="auto" />
    </>
  );
}