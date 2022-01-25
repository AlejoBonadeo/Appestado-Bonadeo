import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme';

const Settings = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop: insets.top}}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

export default Settings;
