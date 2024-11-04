import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SignUpForm from "../components/SignUpForm";
import { SignUpProps } from "../../types";

const SignUp = ({ navigation }: SignUpProps) => {
  return (
    <View style={styles.container}>
      <SignUpForm navigation={navigation} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
