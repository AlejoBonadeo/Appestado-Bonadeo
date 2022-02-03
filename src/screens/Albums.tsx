import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { styles } from '../theme';
import { logOut } from '../store/actions/authActions';

const Albums = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<RootState, boolean>(
    state => state.auth.isLoggedIn,
  );
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums</Text>
      {isLoggedIn && (
        <Button title="Log Out" onPress={() => dispatch(logOut())} />
      )}
    </View>
  );
};

export default Albums;
