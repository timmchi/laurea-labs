import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  //   const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert("Successfully signed up");
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
        {/* <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name or username"
        /> */}
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
        <Button onPress={signUp} title="Sign Up" />
      )}
    </View>
  );
};

export default SignUpForm;

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
