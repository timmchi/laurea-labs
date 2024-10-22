import { Button, View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FirstPageProps } from "../types";

const FirstPage = ({ navigation }: FirstPageProps) => {
  return (
    <SafeAreaView style={pageStyles.container}>
      <View style={pageStyles.innerContainer}>
        <View style={pageStyles.textContainer}>
          <Text style={pageStyles.mainText}>
            This is the First Page of the app
          </Text>
          <Button
            onPress={() => navigation.navigate("SecondPage")}
            title="Go to Second Page"
          />
        </View>
        <Text style={pageStyles.description}>
          Navigate Between Screens using {"\n"} React Navigation
        </Text>
        <Text style={pageStyles.link}>aboutreact.com</Text>
      </View>
    </SafeAreaView>
  );
};

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: { flex: 1, padding: 16 },
  textContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  mainText: { fontSize: 25, textAlign: "center", marginBottom: 16 },
  description: { fontSize: 18, textAlign: "center", color: "grey" },
  link: { fontSize: 16, textAlign: "center", color: "grey" },
});

export default FirstPage;
