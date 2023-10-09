import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  )
}