import { Image, StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect, Stack } from "expo-router";
import { icons } from "../../constants";
import { StatusBar } from "expo-status-bar";


const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light"  />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
