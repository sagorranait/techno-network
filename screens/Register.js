import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginWrapper from '../components/LoginWrapper'
import { COLORS, FONTS } from '../constants';
import Button from '../components/Button';

export default function Register() {
  const onPhoneNumber = () => {}

  return (
    <LoginWrapper
      inputTitle='Even though registration just takes a few seconds, You have full control over your purchase.'
    >
      <View style={[styles.inputContainer, styles.inputBorder, { marginBottom: 15, }]}>
        <View style={styles.inputContainer}>
          <Icon
            name='user-circle-o'
            size={40}
            color={COLORS.primary}
            style={{ marginRight: 8, marginBottom: 4,}}
          />
        </View>
        <TextInput
          style={[styles.inputLogoText, styles.numberInput]}
          onChangeText={onPhoneNumber}
          placeholder="Full Name"
          autoCapitalize='words'
        />
      </View>
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
          onChangeText={onPhoneNumber}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
      </View>
      <Button label='REGISTER' />
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
    borderBottomColor: COLORS.gray,
  }
});