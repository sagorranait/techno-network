import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import DrawerMenu from './DrawerMenu';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="drawer" component={DrawerMenu} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}