import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import HomeScreen from "./DrawerScreens/HomeScreen";
import SettingsScreen from "./DrawerScreens/SettingsScreen";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";
import { DrawerStackParamList, DrawerParamList } from "../types";

const Stack = createStackNavigator<DrawerStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const homeScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home", // Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", // Set Header color
          },
          headerTintColor: "#fff", // Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", // Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc", // Set Header color
        },
        headerTintColor: "#fff", // Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", // Set Header text style
        },
      })}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings", // Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#cee1f2",
        drawerItemStyle: { marginVertical: 5 },
        drawerLabelStyle: { color: "#d8d8d8" },
      }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home Screen" }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{ drawerLabel: "Setting Screen" }}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
