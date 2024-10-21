import { Button, View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ThirdPageProps } from "../types";

const ThirdPage = ({ route, navigation }: ThirdPageProps) => {
  return (
    <SafeAreaView style={pageStyles.container}>
      <View style={pageStyles.innerContainer}>
        <View style={pageStyles.textContainer}>
          <Text style={pageStyles.mainText}>
            This is the Third Page of the app
            {"\n"}
            {route.params.someParam}
          </Text>
          {route.params.someParam !== "reset" ? (
            <Button onPress={() => navigation.goBack()} title="Go back" />
          ) : null}
          <Button
            onPress={() => navigation.navigate("SecondPage")}
            title="Go to SecondPage"
          />
          <Button
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "FirstPage", params: { someParam: "reset" } }],
              })
            }
            title="Reset navigator state to First Page"
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

export default ThirdPage;
