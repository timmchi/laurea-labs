import { View, Text, Button } from "react-native";
import React from "react";

// fix types
const Welcome = ({ navigation }: any) => {
  return (
    <View>
      <Text>Welcome</Text>
      <Button
        onPress={() => navigation.navigate("My Todos")}
        title="View your todos"
      />
    </View>
  );
};

export default Welcome;
