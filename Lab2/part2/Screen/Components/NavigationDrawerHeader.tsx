import { View, Image, TouchableOpacity } from "react-native";
import { NavigationDrawerHeaderProps } from "../../types";

const NavigationDrawerHeader = ({
  navigationProps,
}: NavigationDrawerHeaderProps) => {
  const toggleDrawer = () => {
    navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
