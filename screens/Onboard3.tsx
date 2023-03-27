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

const Onboard3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboard3}>
      <Text
        style={[
          styles.getProfessionalHelpconnect,
          styles.buttonFlexBox,
          styles.startNowClr,
        ]}
      >
        Get professional help!Connect with speciecialists in your area of
        problem!
      </Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUpAnSignIn")}
      >
        <Text style={[styles.startNow, styles.startNowClr]}>Start Now!</Text>
      </TouchableOpacity>
      <Image
        style={styles.onboard3Child}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <Image
        style={styles.undrawExpertsReI40h1Icon}
        resizeMode="cover"
        source={require("../assets/undraw-experts-re-i40h-1.png")}
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
  startNowClr: {
    color: Color.white,
    fontWeight: "600",
  },
  getProfessionalHelpconnect: {
    top: 520,
    left: 23,
    fontSize: 16,
    fontFamily: FontFamily.openSansSemibold,
    textAlign: "center",
    display: "flex",
    width: 329,
  },
  startNow: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "left",
  },
  button: {
    top: 695,
    left: 212,
    borderRadius: 20,
    backgroundColor: Color.orange,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  onboard3Child: {
    top: 642,
    left: 158,
    width: 58,
    height: 7,
    position: "absolute",
  },
  undrawExpertsReI40h1Icon: {
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
  onboard3: {
    backgroundColor: Color.darkslategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Onboard3;
