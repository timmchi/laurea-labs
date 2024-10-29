import { View, TextInput, StyleSheet, Button } from "react-native";
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
      <Button
        onPress={addTodo}
        title="Add todo"
        disabled={todoText.length === 0}
      />
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
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#fff",
  },
});
