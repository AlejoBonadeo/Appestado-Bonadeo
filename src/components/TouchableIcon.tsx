import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {changeFavIcon} from '../store/actions/authActions';
import { RootState } from '../store';

interface Props {
  icon: string;
}

const TouchableIcon = ({icon}: Props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isLoggedIn)
  return (
    <TouchableOpacity onPress={() => isLoggedIn && dispatch(changeFavIcon(icon))}>
      <Icon name={icon} size={50} color="#900" />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
