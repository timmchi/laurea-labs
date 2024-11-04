import { View, StyleSheet } from "react-native";
import React from "react";
import LogInForm from "../components/LogInForm";
import { LogInProps } from "../../types";

const LogIn = ({ navigation }: LogInProps) => {
  return (
    <View style={styles.container}>
      <LogInForm navigation={navigation} />
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
