import { View, Text, Button } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";

// fix types
const Welcome = ({ navigation }: any) => {
  return (
    <View>
      <Text>Welcome</Text>
      <Button
        onPress={() => navigation.navigate("My Todos")}
        title="View your todos"
      />
      {/* <Button onPress={() => navigation.navigate("Log In")} title="to login" />
      <Button
        onPress={() => navigation.navigate("Sign Up")}
        title="to signup"
      /> */}
      <Button title="Sign Out" onPress={() => auth().signOut()} />
    </View>
  );
};

export default Welcome;
