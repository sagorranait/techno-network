import { View, Text, StyleSheet, Pressable } from 'react-native'
import { COLORS, FONTS } from '../constants';

export default function Button({ label, onPress }) {
  return (
    <View style={styles.container} >    
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  button: {
    padding: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: FONTS.Poppins,
    fontSize: 18,
    letterSpacing: 1,
    color: COLORS.white,
  }
});