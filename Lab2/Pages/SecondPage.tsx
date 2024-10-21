import { Button, View, Text, SafeAreaView, StyleSheet } from "react-native";
import { SecondPageProps } from "../types";

const SecondPage = ({ navigation }: SecondPageProps) => {
  return (
    <SafeAreaView style={pageStyles.container}>
      <View style={pageStyles.innerContainer}>
        <View style={pageStyles.textContainer}>
          <Text style={pageStyles.mainText}>
            This is the Second Page of the app
          </Text>
          <Button onPress={() => navigation.goBack()} title="Go back" />
          <Button
            onPress={() => navigation.push("SecondPage")}
            title="Go to SecondPage... again"
          />
          <Button
            onPress={() =>
              navigation.replace("ThirdPage", { someParam: "Param" })
            }
            title="Replace this screen with THird Page"
          />
          <Button
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "ThirdPage", params: { someParam: "reset" } }],
              })
            }
            title="Reset navigator state to third page"
          />
          <Button
            onPress={() => navigation.navigate("FirstPage")}
            title="Go to First Page"
          />
          <Button
            onPress={() =>
              navigation.navigate("ThirdPage", { someParam: "Param1" })
            }
            title="Go to Third Page"
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

export default SecondPage;
