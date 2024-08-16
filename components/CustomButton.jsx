import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.6}
      className={` bg-secondary-100 min-h-[60px] justify-center items-center rounded-md ${containerStyles} ${
        isLoading ? "opacity-20" : ""
      }`}
      disabled={isLoading}
    >
      <Text className=" font-psemibold text-primary text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
