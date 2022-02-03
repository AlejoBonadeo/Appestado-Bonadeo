import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {logIn} from '../store/actions/authActions';
import {RootState} from '../store';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<RootState, boolean>(
    state => state.auth.isLoggedIn,
  );
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contancts</Text>
      {!isLoggedIn && (
        <Button title="Log In" onPress={() => dispatch(logIn())} />
      )}
    </View>
  );
};

export default Contacts;
