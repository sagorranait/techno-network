import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FONTS from '../constants/fonts'

export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.gradings}>Welcome Back,</Text>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Techno EDGE Network Solution</Text>
          <Text style={styles.subTitle}>24/7 WiFi Connection</Text>
        </View>
        <View>
          <Text>Phone Number</Text>
          <View>
            <View>
              <Image
                source={require('../assets/bd-icon.png')}
                style={styles.logo}
              />
              <Text>+880</Text>
            </View>
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
  }
});