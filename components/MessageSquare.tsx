import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type MessageSquareType = {
  style?: StyleProp<ViewStyle>;
};

const MessageSquare = ({ style }: MessageSquareType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.messageSquare, style]}
      onPress={() => navigation.navigate("Messages")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/messagesquare.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  messageSquare: {
    width: 24,
    height: 24,
  },
});

export default MessageSquare;
