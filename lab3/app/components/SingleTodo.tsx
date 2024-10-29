import { TodoCardProps } from "app/types";
import { Todo } from "app/types";

import {
  View,
  Text,
  Button,
  Card,
  H2,
  Image,
  Paragraph,
  XStack,
} from "tamagui";

// i guess this is where we're gonna map the todos
const StackTodo = ({ todo }: { todo: Todo }) => {
  return (
    <XStack $sm={{ flexDirection: "column" }} paddingHorizontal="$4" space>
      <SingleTodoCard
        animation="bouncy"
        size="$4"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        title={todo.title}
        completed={todo.completed}
        userId={todo.userId}
      />
    </XStack>
  );
};

const SingleTodoCard = (props: TodoCardProps) => {
  const { title, completed, userId } = props;

  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>{title}</H2>
        <Paragraph theme="alt2">
          {completed ? "completed" : "not completed"}
        </Paragraph>
        <Paragraph theme="alt2">card of user {userId}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Mark completed</Button>
      </Card.Footer>
    </Card>
  );
};

export default StackTodo;
