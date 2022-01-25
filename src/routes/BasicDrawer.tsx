import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const BasicDrawer = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,
    }}
    >
      <Drawer.Screen 
      name="StackNavigator" 
      component={StackNavigator}
      options={{title: 'Home'}}
      />
      <Drawer.Screen 
      name="Settings" 
      component={Settings}
      options={{title: 'Settings'}} 
      />
    </Drawer.Navigator>
  );
}

export default BasicDrawer