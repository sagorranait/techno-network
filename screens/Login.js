import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FONTS from '../constants/fonts'
import { COLORS } from '../constants';

export default function Login() {
  const onLogin = () => {}

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
        <View style={styles.inputArea}> 
          <Text style={styles.inputTitle}>Use the phone number you chose when registering to your account.</Text>
          <View style={[styles.inputContainer, styles.inputBorder]}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../assets/bd-icon.png')}
                style={styles.inputLogo}
              />
              <Text style={styles.inputLogoText}>+880</Text>
            </View>
            <TextInput
              style={[styles.inputLogoText, styles.numberInput]}
              onChangeText={onLogin}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
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
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  inputLogo:{
    width: 45,
    height: 45,
    objectFit: 'contain'
  },
  inputLogoText:{
    fontFamily: FONTS.Poppins,
    fontSize: 16
  },
  numberInput: {
    flex: 1
  },
  inputBorder: { 
    paddingBottom: 5, 
    borderBottomWidth: 1, 
    borderBottomColor: COLORS.gray
  }
});