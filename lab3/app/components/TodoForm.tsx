import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  Text,
} from "react-native";
import React from "react";

const TodoForm = ({
  addTodo,
  todoText,
  setTodoText,
}: {
  addTodo: () => void;
  todoText: string;
  setTodoText: (text: string) => void;
}) => {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Add new todo"
        onChangeText={(text: string) => setTodoText(text)}
        value={todoText}
        style={styles.input}
      />
      {/* <Button
        onPress={addTodo}
        title="Add todo"
        disabled={todoText.length === 0}
      /> */}
      <Pressable
        onPress={addTodo}
        disabled={todoText.length === 0}
        style={[
          styles.button,
          todoText.length === 0 && { backgroundColor: "#c6c6c6" },
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            todoText.length === 0 && { color: "white" },
          ]}
        >
          Add Todo
        </Text>
      </Pressable>
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: "#3662AA",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
