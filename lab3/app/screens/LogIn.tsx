import { View, Text, Button } from "react-native";
import React from "react";
import LogInForm from "../components/LogInForm";

const LogIn = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <LogInForm />
      <Button
        onPress={() => navigation.navigate("Sign Up")}
        title="to signup"
      />
    </View>
  );
};

export default LogIn;
