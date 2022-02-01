import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import Tab1 from '../screens/Tab1';
import TopTabs from './MaterialTopTabsNav';
import StackNavigator from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: '#123456',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let icon: any = '';
          switch (route.name) {
            case 'Tab1':
              icon = 'airplane-outline';
              break;
            case 'TopTabs':
              icon = 'call-outline';
              break;
            case 'StackNavigator':
              icon = 'apps-outline';
              break;
            default:
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name={icon} size={20} />
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1} />
      <Tab.Screen
        name="TopTabs"
        options={{title: 'TopTabs'}}
        component={TopTabs}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
