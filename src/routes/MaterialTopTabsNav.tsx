import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from '../screens/Chats';
import Contacts from '../screens/Contacts';
import Albums from '../screens/Albums';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: '#123456',
        showIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#123456',
        },
        tabBarStyle: {
          borderTopColor: '#123456',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let icon: string = '';
          switch (route.name) {
            case 'Chats':
              icon = 'chatbox-outline';
              break;
            case 'Contacts':
              icon = 'people-outline';
              break;
            case 'Albums':
              icon = 'albums-outline';
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
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};

export default TopTabs;
