import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../constants';

export default function LoginWrapper({ children, inputTitle, }) {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.gradings}>
            Welcome{route.name === 'login' ? ' Back' : ''},
          </Text>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Techno EDGE Network Solution</Text>
          <Text style={styles.subTitle}>24/7 WiFi Connection</Text>
        </View>
        <View style={styles.inputArea}> 
          <Text style={styles.inputTitle}>{inputTitle}</Text>

          { children }

          <View style={styles.bottomArea}>
            <Text style={styles.bottomText}>
              { route.name === 'login' ? 'Don’t have an account?' : 'Already have an account?' }              
            </Text>  
            <Pressable onPress={() => navigation.navigate('register')} >
              <Text 
                style={[
                  styles.bottomText, 
                  { color: COLORS.primary, textDecorationLine: 'underline',}
                ]} 
              >
                { route.name === 'login' ? 'Create an account' : 'Login' }                
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 25,
  },
  gradings: {
    fontFamily: FONTS.Poppins,
		fontSize: 18,
    marginBottom: 18,
	},
  logo: {
    width: 75,
    height: 75,
    objectFit: 'contain',
  },
  logoText: {
    fontFamily: FONTS.Poppins700,
		fontSize: 32,
  },
  subTitle: {
    fontFamily: FONTS.Poppins,
    fontSize: 20
  },
  inputArea: {
    paddingTop: 50
  },
  inputTitle: {
    fontFamily: FONTS.Poppins,
    fontSize: 15,
    paddingBottom: 15
  },
  bottomArea: { 
    marginTop: 65,
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    gap: 3, 
  },
  bottomText:{
    fontFamily: FONTS.Poppins,
    fontSize: 14,
    textAlign: 'center',
  }
});