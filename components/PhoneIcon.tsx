import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type PhoneIconType = {
  style?: StyleProp<ViewStyle>;
};

const PhoneIcon = ({ style }: PhoneIconType) => {
  return (
    <Image
      style={[styles.phoneIcon, style]}
      resizeMode="cover"
      source={require("../assets/phone.png")}
    />
  );
};

const styles = StyleSheet.create({
  phoneIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default PhoneIcon;
