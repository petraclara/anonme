import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type UserIconType = {
  style?: StyleProp<ViewStyle>;
};

const UserIcon = ({ style }: UserIconType) => {
  return (
    <Image
      style={[styles.userIcon, style]}
      resizeMode="cover"
      source={require("../assets/user1.png")}
    />
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
});

export default UserIcon;
