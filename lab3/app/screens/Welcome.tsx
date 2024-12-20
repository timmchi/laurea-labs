import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import auth from "@react-native-firebase/auth";
import { WelcomeProps } from "../../types";

const Welcome = ({ navigation, route }: WelcomeProps) => {
  const { user } = route.params;

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#617ead", "#3662AA"]}>
      <View style={{ flex: 1 }}>
        <View>
          <View>
            <Image
              source={require("../../assets/homerun.png")}
              style={styles.image1}
            />
            <Image
              source={require("../../assets/gardening.png")}
              style={styles.image2}
            />
            <Image
              source={require("../../assets/shopping.png")}
              style={styles.image3}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.titleText}>Welcome to your Todo App!</Text>
            <Text style={styles.descriptionText}>
              Get a home run, do some gardening, make a shopping list -
              possibilities are endless
            </Text>
            <Pressable
              onPress={() => navigation.navigate("My Todos", { user })}
              style={styles.button}
            >
              <Text style={styles.buttonText}>View Your Todos</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Contact")}
            >
              <Text style={styles.buttonText}>Contact</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => auth().signOut()}>
              <Text style={styles.buttonText}>Sign Out</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "800",
    color: "#fff",
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginVertical: 5,
    width: "100%",
  },
  buttonText: {
    color: "#3662AA",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  image1: {
    height: 125,
    width: 125,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  image2: {
    height: 125,
    width: 125,
    borderRadius: 20,
    position: "absolute",
    top: 100,
    right: 50,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "25deg" }],
  },
  image3: {
    height: 150,
    width: 150,
    borderRadius: 20,
    position: "absolute",
    top: 200,
    left: 60,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "15deg" }],
  },
});
