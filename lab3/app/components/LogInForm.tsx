import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LogInProps } from "../../types";

const LogInForm = ({ navigation }: LogInProps) => {
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
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <MaterialIcons name="email" size={24} color="#7C808D" />
          </View>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <MaterialIcons name="password" size={24} color="#7C808D" />
          </View>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Password"
          />
        </View>
      </KeyboardAvoidingView>
      {loading ? (
        <ActivityIndicator size="small" style={{ margin: 28 }} />
      ) : (
        <Pressable style={styles.loginButton} onPress={logIn}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>
      )}
      <Pressable
        style={styles.signUpLink}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.signUpText}>Don't have an account yet?</Text>
        <Text style={styles.signUpTextHighlight}>Go to Sign Up page</Text>
      </Pressable>
    </ScrollView>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  content: { paddingHorizontal: 30 },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#3662AA",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#eee",
    fontSize: 16,
  },
  icon: {
    marginRight: 15,
  },
  loginButton: {
    backgroundColor: "#3662AA",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    width: "90%",
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUpLink: {
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    gap: 4,
  },
  signUpText: { fontSize: 16, color: "#7C908D" },
  signUpTextHighlight: { fontSize: 16, color: "#3662AA", fontWeight: "500" },
});
