import { TodoCardProps } from "app/types";
import { Todo } from "app/types";

import {
  View,
  Text,
  Button,
  Card,
  H3,
  Image,
  Paragraph,
  XStack,
  Checkbox,
  CardFooter,
} from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";

// i guess this is where we're gonna map the todos
const StackTodo = ({ todos }: { todos: Todo[] }) => {
  return (
    <XStack $sm={{ flexDirection: "column" }} paddingHorizontal="$4" gap="$2">
      {todos.map((todo) => (
        <SingleTodoCard
          key={todo.todoId}
          animation="bouncy"
          size="$4"
          width={350}
          height={125}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
          title={todo.title}
          completed={todo.completed}
          userId={todo.userId}
        />
      ))}
    </XStack>
  );
};

const SingleTodoCard = (props: TodoCardProps) => {
  const { title, completed, userId, todoId } = props;

  const markCompletionChange = () => {
    console.log("todo marked completed for userId");
  };

  const deleteTodo = () => {
    console.log(`deleting todo with id ${todoId} by ${userId}`);
  };

  const editTodo = () => {
    console.log("editing todo...");
  };

  return (
    <Card elevate size="$4" bordered {...props}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <H3
          style={{
            paddingLeft: 15,
            textDecorationLine: completed ? "line-through" : "none",
          }}
        >
          {title}
        </H3>
        <Checkbox
          defaultChecked={completed}
          size="$10"
          margin={10}
          onCheckedChange={markCompletionChange}
        >
          <Checkbox.Indicator>
            <CheckIcon size="$5" color="green" />
          </Checkbox.Indicator>
        </Checkbox>
      </View>
      <CardFooter gap="$2" style={{ marginBottom: 10, marginLeft: 6 }}>
        <Button onPress={deleteTodo} size="$3">
          Delete
        </Button>
        <Button onPress={editTodo} size="$3">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StackTodo;
