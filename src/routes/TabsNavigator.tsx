import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          borderTopColor: 'red',
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
            let icon: string = '';
            switch (route.name) {
                case 'Tab1':
                    icon = 'T1'
                    break;
                case 'Tab2':
                    icon = 'T2'
                    break;
                case 'StackNavigator':
                    icon = 'ST'
                    break;
                default:
                    break;
            }
            return <Text style={{ color }}>{ icon }</Text>
        }
      })}>
      <Tab.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1} />
      <Tab.Screen name="Tab2" options={{title: 'Tab2'}} component={Tab2} />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
