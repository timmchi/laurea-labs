import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export type StackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  DrawerNavigationRoutes: undefined;
  SplashScreen: undefined;
  Auth: undefined;
};

export type DrawerStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

export type DrawerParamList = {
  homeScreenStack: undefined;
  settingScreenStack: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  StackParamList,
  "LoginScreen"
>;

export type RegisterScreenProps = NativeStackScreenProps<
  StackParamList,
  "RegisterScreen"
>;

export type SplashScreenProps = NativeStackScreenProps<
  StackParamList,
  "SplashScreen"
>;

export type DrawerNavigationScreenProps = NativeStackScreenProps<
  StackParamList,
  "DrawerNavigationRoutes"
>;

export type NavigationDrawerHeaderProps = {
  navigationProps: DrawerNavigationProp<any>;
};

export type LoaderProps = {
  loading: boolean;
};
