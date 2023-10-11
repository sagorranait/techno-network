import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import LoginWrapper from '../components/LoginWrapper';
import { COLORS, FONTS } from '../constants';
import Button from '../components/Button';

export default function Login() {
  const onLogin = () => {}

  return (
    <LoginWrapper 
      inputTitle='Use the phone number you chose when registering to your account.'
    >
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
      <Button label='LOGIN'/>
    </LoginWrapper>
  )
}

const styles = StyleSheet.create({
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