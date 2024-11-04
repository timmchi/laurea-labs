import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SignUpProps } from "../../types";

const SignUpForm = ({ navigation }: SignUpProps) => {
  const [email, setEmail] = useState("");
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
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
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
        <Pressable style={styles.signUpButton} onPress={signUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>
      )}
      <Pressable
        style={styles.loginLink}
        onPress={() => navigation.navigate("Log In")}
      >
        <Text style={styles.loginText}>Already have an account?</Text>
        <Text style={styles.loginTextHighlight}>Go to Log In page</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
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
  signUpButton: {
    backgroundColor: "#3662AA",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    width: "90%",
  },
  signUpButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginLink: {
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    gap: 4,
  },
  loginText: { fontSize: 16, color: "#7C908D" },
  loginTextHighlight: { fontSize: 16, color: "#3662AA", fontWeight: "500" },
});
