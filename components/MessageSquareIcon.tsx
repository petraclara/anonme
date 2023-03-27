import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type MessageSquareIconType = {
  style?: StyleProp<ViewStyle>;
};

const MessageSquareIcon = ({ style }: MessageSquareIconType) => {
  return (
    <Image
      style={[styles.messageSquareIcon, style]}
      resizeMode="cover"
      source={require("../assets/messagesquare1.png")}
    />
  );
};

const styles = StyleSheet.create({
  messageSquareIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default MessageSquareIcon;
