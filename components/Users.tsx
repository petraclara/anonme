import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type UsersType = {
  style?: StyleProp<ViewStyle>;
};

const Users = ({ style }: UsersType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.users, style]}
      onPress={() => navigation.navigate("Communities")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/users.png")}
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
  users: {
    width: 25,
    height: 25,
  },
});

export default Users;
