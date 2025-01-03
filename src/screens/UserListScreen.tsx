import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchLocalUsers } from "../store/UserStore";
import UserListItem from "../components/UserListItem";
import { User } from "../models/User";

const UserListScreen = () => {
  const [users, setUsers] = useState<User[]>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    fetchLocalUsers(search).then((users) => {
      if (users.length > 0) {
        setUsers(users);
      }
    });
  }, [search]);

  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.searchInput} value={search} onChangeText={(text) => setSearch(text)} placeholder="Search an user" />
        <FlatList
          data={users}
          ItemSeparatorComponent={<View style={styles.itemSeparator}/>}
          ListEmptyComponent={<View><Text>No users to show</Text></View>}
          keyExtractor={(item) => item.email}
          renderItem={({ item }) => <UserListItem user={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  searchInput: {
    padding: 20,
    margin: 10,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  itemSeparator: {
    height: 1,
    backgroundColor: 'black',
  }
});
