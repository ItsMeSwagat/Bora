import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            className=" w-[150px] h-[85px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className=" w-[550px] h-[330px]"
            resizeMode="contain"
          />

          <View className=" mt-8">
            <Text className=" font-pbold text-3xl text-center text-white">
              Discover Endless Possibilities with{" "}
              <Text className=" text-secondary-200">Bora</Text>
            </Text>

            <Image
              source={images.path}
              className=" w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <View className=" w-full items-center mt-10">
            <Text className=" text-center text-gray-100 text-[18px]">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Bora
            </Text>

            <CustomButton
              title="LETS GO"
              handlePress={() => router.push('/login')}
              containerStyles=" w-full mt-8"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
