import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../routes/StackNavigator';
import {styles} from '../theme';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

const Person = ({route, navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{route.params.name}</Text>
    </View>
  );
};

export default Person;
