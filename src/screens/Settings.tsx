import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon  from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {styles} from '../theme';

const Settings = () => {
  const insets = useSafeAreaInsets();

  const state = useSelector<RootState, RootState>(state => state)

  return (
    <View style={{marginTop: insets.top}}>
      <Text style={styles.title}>Settings</Text>
      <Text>{ JSON.stringify(state, null, 3)}</Text>
      {
        state.auth.favoriteIcon && (
          <Icon 
          name={state.auth.favoriteIcon} 
          size={150}/>
        )
      }
    </View>
  );
};

export default Settings;
