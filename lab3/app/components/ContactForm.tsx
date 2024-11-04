import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  const sendMessage = async () => {
    await addDoc(collection(FIRESTORE_DB, "messages"), {
      message,
      subject,
      contactAddress,
    });

    setMessage("");
    setSubject("");
    setContactAddress("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email Address"
        value={contactAddress}
        onChangeText={setContactAddress}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Pressable
        onPress={sendMessage}
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.8 },
          (subject === "" || message === "" || contactAddress === "") && {
            backgroundColor: "grey",
          },
        ]}
        disabled={subject === "" || message === "" || contactAddress === ""}
      >
        <Text style={styles.buttonText}>Send Message</Text>
      </Pressable>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3662AA",
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  messageInput: { height: 120, textAlignVertical: "top" },
  button: {
    backgroundColor: "#3662AA",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
