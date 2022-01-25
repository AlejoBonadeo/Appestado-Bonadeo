import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme';

interface Props extends StackScreenProps<any, any> {}

const Page3 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3</Text>
      <Button title="Return to page 2" onPress={() => navigation.pop()} />
      <Button title="Return to page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3;
