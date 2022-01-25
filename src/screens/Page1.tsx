import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme';

interface Props extends DrawerScreenProps<any, any> {}

const Page1 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.openDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2')}
      />
      <Text>Navigate with arguments</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('Person', {
              name: 'Pedro',
            })
          }>
          <Text style={styles.btnText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('Person', {
              name: 'Susana',
            })
          }>
          <Text style={styles.btnText}>Susana</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1;
