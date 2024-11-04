import { StackScreenProps, StackNavigationProp } from "@react-navigation/stack";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface Todo {
  title: string;
  userId: number;
  todoId: string;
  done: boolean;
}

export type StackParamList = {
  Welcome: { user: FirebaseAuthTypes.User };
  "My Todos": { user: FirebaseAuthTypes.User };
  Contact: undefined;
  "Log In": undefined;
  "Sign Up": undefined;
};

export type WelcomeProps = StackScreenProps<StackParamList, "Welcome">;
export type MyTodosProps = StackScreenProps<StackParamList, "My Todos">;
export type ContactProps = StackScreenProps<StackParamList, "Contact">;

export type LogInNavigationProp = StackNavigationProp<StackParamList, "Log In">;
export type SignUpNavigationProp = StackNavigationProp<
  StackParamList,
  "Sign Up"
>;

export type LogInProps = { navigation: LogInNavigationProp };

export type SignUpProps = { navigation: LogInNavigationProp };
