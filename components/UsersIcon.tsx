import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type UsersIconType = {
  style?: StyleProp<ViewStyle>;
};

const UsersIcon = ({ style }: UsersIconType) => {
  return (
    <Image
      style={[styles.usersIcon, style]}
      resizeMode="cover"
      source={require("../assets/users1.png")}
    />
  );
};

const styles = StyleSheet.create({
  usersIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
});

export default UsersIcon;
