import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import TodoForm from "../components/TodoForm";
import { Todo } from "../../types";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

// fix the type
const TodosList = ({ route }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");
  const { user } = route.params;

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, "todos");

    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        console.log("todos updated");

        const todos: Todo[] = snapshot.docs
          .map((doc) => {
            const data = doc.data();

            if (data.userId !== user.uid) {
              return null;
            }

            return {
              title: data.title as string,
              todoId: doc.id,
              userId: Number(data.userId),
              done: data.done,
            };
          })
          .filter((todo): todo is Todo => todo !== null);
        setTodos(todos);
      },
    });

    return () => subscriber();
  }, []);

  const addTodo = async () => {
    await addDoc(collection(FIRESTORE_DB, "todos"), {
      title: todoText,
      done: false,
      userId: user.uid,
    });

    setTodoText("");
  };

  const renderTodo = ({ item }: { item: Todo }) => {
    const ref = doc(FIRESTORE_DB, `todos/${item.todoId}`);

    const toggleDone = async () => {
      updateDoc(ref, { done: !item.done });
    };

    const deleteItem = async () => {
      deleteDoc(ref);
    };

    return (
      <View style={styles.todoContainer}>
        <Pressable onPress={toggleDone} style={styles.todo}>
          <Text style={styles.todoText}>{item.title}</Text>
          <View style={styles.icons}>
            {item.done && (
              <Ionicons
                name="checkmark-circle-sharp"
                size={38}
                color="green"
                style={{ padding: 8 }}
              />
            )}
            {!item.done && (
              <Feather
                name="circle"
                size={36}
                color="black"
                style={{ padding: 8 }}
              />
            )}
            <Ionicons
              name="trash-outline"
              size={36}
              color="red"
              style={{ borderWidth: 1, borderRadius: 8, padding: 8 }}
              onPress={deleteItem}
            />
          </View>
        </Pressable>
      </View>
    );
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
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  todoContainer: {
    borderWidth: 2,
    margin: 4,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  todoText: { fontSize: 24, fontWeight: "bold" },
  icons: { flexDirection: "row", gap: 8 },
});
