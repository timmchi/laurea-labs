import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ContactForm />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
