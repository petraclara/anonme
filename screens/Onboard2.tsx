import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Onboard2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboard2}>
      <Text style={[styles.connectWithPeople, styles.buttonFlexBox]}>
        Connect with people you can relate with and create a family! Listen,
        share your story and save a life today!
      </Text>
      <TouchableOpacity
        style={styles.skip}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUpAnSignIn")}
      >
        <Text style={[styles.skip1, styles.nextTypo]}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Onboard3")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </TouchableOpacity>
      <Image
        style={styles.onboard2Child}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={styles.undrawConnectionReLcud2Icon}
        resizeMode="cover"
        source={require("../assets/undraw-connection-re-lcud-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontSize: 20,
    color: Color.white,
  },
  connectWithPeople: {
    top: 509,
    left: 23,
    fontSize: 16,
    fontFamily: FontFamily.openSansSemibold,
    textAlign: "center",
    display: "flex",
    width: 329,
    color: Color.white,
    alignItems: "center",
    fontWeight: "600",
  },
  skip1: {
    fontFamily: FontFamily.openSansRegular,
  },
  skip: {
    left: 30,
    top: 705,
    position: "absolute",
  },
  next: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: 20,
  },
  button: {
    top: 695,
    left: 260,
    borderRadius: 20,
    backgroundColor: Color.orange,
    flexDirection: "row",
    paddingHorizontal: 19,
    paddingVertical: 5,
  },
  onboard2Child: {
    top: 642,
    left: 158,
    width: 58,
    height: 7,
    position: "absolute",
  },
  undrawConnectionReLcud2Icon: {
    height: "31.8%",
    width: "84%",
    top: "20.69%",
    right: "8%",
    bottom: "47.51%",
    left: "8%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  onboard2: {
    backgroundColor: Color.darkslategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Onboard2;
