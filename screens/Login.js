import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Logafasdfasdfin</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
		fontSize: 30
	}
});