import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const logIn = async () => {
    setLoading(true);

    try {
      await auth().signInWithEmailAndPassword(email, password);
      alert("Successfully logged in");
      setEmail("");
      setPassword("");
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Registration failed: " + err.message);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
      </KeyboardAvoidingView>
      {loading ? (
        <ActivityIndicator size="small" style={{ margin: 28 }} />
      ) : (
        <Button onPress={logIn} title="Log In" />
      )}
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
