import { Image, StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image source={icon} resizeMode="contain" tintColor={color} className=" w-6 h-6" />
      <Text>{name}</Text>
    </View>
  );
};
const AuthLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            header: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
