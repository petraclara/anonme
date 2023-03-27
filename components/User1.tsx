import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type User1Type = {
  style?: StyleProp<ViewStyle>;
};

const User1 = ({ style }: User1Type) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.user, style]}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/user.png")}
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
  user: {
    width: 25,
    height: 25,
  },
});

export default User1;
