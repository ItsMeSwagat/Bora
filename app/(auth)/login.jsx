import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const login = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView>
        <View>
          <Image source={images.logo} resizeMode="contain" className=" w-[120px] h-[35px]" />
        </View>
        <Text className=' text-white'>
          Login to Aora
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;
