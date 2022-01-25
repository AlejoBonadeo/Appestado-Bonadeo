import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme';

interface Props extends StackScreenProps<any, any> {}

const Page2 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigation.navigate('Page3')}
      />
    </View>
  );
};

export default Page2;
