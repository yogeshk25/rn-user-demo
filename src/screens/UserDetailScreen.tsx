import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { User } from "../models/User";
import UserDetailRow from "../components/UserDetailRow";

const UserDetailScreen = () => {
  const route = useRoute();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (route.params?.user) {
      setUser(route.params.user);
    }
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      {user && (
        <ScrollView style={styles.container}>
          <UserDetailRow label="First name: " value={user.firstName} />
          <UserDetailRow label="Last name: " value={user.lastName} />
          <UserDetailRow label="Gender: " value={user.gender} />
          <UserDetailRow label="Age: " value={user.age} />
          <UserDetailRow label="Location: " value={user.location} />
          <UserDetailRow label="Email: " value={user.email} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
