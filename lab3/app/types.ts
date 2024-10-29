import type { CardProps } from "tamagui";

export interface Todo {
  todoId: number;
  title: string;
  completed: boolean;
  dueDate?: Date;
  completionDate?: Date;
  userId: number;
}

export interface TodoCardProps extends CardProps, Partial<Todo> {}
