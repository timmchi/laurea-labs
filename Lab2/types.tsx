import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  ThirdPage: { someParam: string };
};

export type FirstPageProps = NativeStackScreenProps<
  StackParamList,
  "FirstPage"
>;

export type SecondPageProps = NativeStackScreenProps<
  StackParamList,
  "SecondPage"
>;

export type ThirdPageProps = NativeStackScreenProps<
  StackParamList,
  "ThirdPage"
>;
