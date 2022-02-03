import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {styles} from '../theme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1 = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab1</Text>
      <Text>
        <TouchableIcon icon="airplane-outline" />
        <TouchableIcon icon="desktop-outline" />
        <TouchableIcon icon="magnet-outline" />
        <TouchableIcon icon="nutrition-outline" />
        <TouchableIcon icon="calculator-outline" />
      </Text>
    </View>
  );
};

export default Tab1;
