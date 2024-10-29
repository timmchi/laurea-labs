import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import TodoForm from "../components/TodoForm";

import { Todo } from "../../types";

const TodosList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, "todos");

    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        console.log("todos updated");

        const todos: Todo[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            title: data.title as string,
            todoId: doc.id,
            userId: Number(data.userId),
            done: data.done,
          };
        });
        setTodos(todos);
      },
    });

    return () => subscriber();
  }, []);

  const addTodo = async () => {
    await addDoc(collection(FIRESTORE_DB, "todos"), {
      title: todoText,
      done: false,
    });

    setTodoText("");
  };

  const renderTodo = ({ item }: { item: Todo }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text>TodosList</Text>
      <TodoForm
        addTodo={addTodo}
        todoText={todoText}
        setTodoText={setTodoText}
      />
      {todos.length > 0 && (
        <FlatList
          data={todos}
          renderItem={renderTodo}
          keyExtractor={(todo: Todo) => todo.todoId}
        />
      )}
    </View>
  );
};

export default TodosList;

const styles = StyleSheet.create({
  container: { marginHorizontal: 20 },
});
