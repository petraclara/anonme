import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type HomeIconType = {
  style?: StyleProp<ViewStyle>;
};

const HomeIcon = ({ style }: HomeIconType) => {
  return (
    <Image
      style={[styles.homeIcon, style]}
      resizeMode="cover"
      source={require("../assets/home.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
});

export default HomeIcon;
