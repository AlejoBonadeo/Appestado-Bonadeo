import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {RootStackParams} from '../routes/StackNavigator';
import { RootState } from '../store';
import { changeUsername } from '../store/actions/authActions';
import {styles} from '../theme';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

const Person = ({route, navigation}: Props) => {

  const isLoggedIn = useSelector<RootState, boolean>(
    state => state.auth.isLoggedIn,
  );
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, []);

  useEffect(() => {
    isLoggedIn && dispatch(changeUsername(route.params.name))
  }, [isLoggedIn]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{route.params.name}</Text>
    </View>
  );
};

export default Person;
