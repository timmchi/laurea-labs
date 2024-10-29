import { Text, View } from "tamagui";
import StackTodo from "app/components/SingleTodo";

const mockTodos = [
  {
    todoId: 1,
    title: "eat breakfast",
    completed: false,
    userId: 1,
  },
  {
    todoId: 2,
    title: "sleep 10 h",
    completed: true,
    userId: 1,
  },
];

export default function TabTwoScreen() {
  return (
    <View flex={1} alignItems="center" bg="$background">
      <Text fontSize={20} color="$blue10">
        Todos list
      </Text>
      <StackTodo todos={mockTodos} />
    </View>
  );
}
