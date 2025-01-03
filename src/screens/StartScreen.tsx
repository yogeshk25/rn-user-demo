import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation();
  const openUserList = () => {
    navigation.navigate('UserList');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openUserList} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: '500',
  }
});
