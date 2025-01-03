import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { User } from '../models/User';
import { useNavigation } from '@react-navigation/native';

type UserListItemProps = {
  user: User;
}

const UserListItem = ({user}: UserListItemProps) => {
  const navigation = useNavigation();

  const name = `${user.firstName} ${user.lastName}`;

  const openUserDetail = () => {
    navigation.navigate('UserDetail', {user});
  };

  return (
    <TouchableOpacity onPress={openUserDetail}>
      <View style={styles.container}>
        <Text style={styles.userName}>{name}</Text>
        <Text>{user.age}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  userName: {
    flex: 1
  },
});