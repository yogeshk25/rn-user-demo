import { StyleSheet, Text, View } from "react-native";
import React from "react";

type UserDetailRowProps = {
  label: string;
  value: string | number;
};

const UserDetailRow = ({ label, value }: UserDetailRowProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default UserDetailRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  label: {
    flex: 0,
    fontSize: 16,
    fontWeight: '600'
  },
  value: {
    flex: 1,
    alignSelf: 'center',
  }
});
