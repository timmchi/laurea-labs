import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TodosList from "./app/screens/TodosList";
import Welcome from "./app/screens/Welcome";
import LogIn from "./app/screens/LogIn";
import SignUp from "./app/screens/SignUp";
import Contact from "./app/screens/Contact";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useState, useEffect } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  const onAuthStateChange = (user: FirebaseAuthTypes.User | null) => {
    console.log("user in auth state change", user);
    setUser(user);

    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);

    return subscriber;
  }, []);

  if (initializing)
    return (
      <View style={styles.initializingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen
              name="My Todos"
              component={TodosList}
              initialParams={{ user }}
            />
            <Stack.Screen name="Contact" component={Contact} />
          </>
        ) : (
          <>
            <Stack.Screen name="Log In" component={LogIn} />
            <Stack.Screen name="Sign Up" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  initializingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
