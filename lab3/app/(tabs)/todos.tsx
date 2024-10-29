import { Text, View } from "tamagui";
import StackTodo from "app/components/SingleTodo";

const mockTodo = {
  title: "eat breakfast",
  completed: false,
  userId: 1,
};

export default function TabTwoScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
      <Text fontSize={20} color="$blue10">
        Todos will go here
      </Text>
      <StackTodo todo={mockTodo} />
    </View>
  );
}
