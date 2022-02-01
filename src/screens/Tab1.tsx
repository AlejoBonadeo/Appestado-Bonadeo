import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {styles} from '../theme';

const Tab1 = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab1</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#900" />
      </Text>
    </View>
  );
};

export default Tab1;
