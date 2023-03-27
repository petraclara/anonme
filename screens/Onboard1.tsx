import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const Onboard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboard1}>
      <Text style={styles.depressedOrFeeling}>{`Depressed or feeling a bit down,
 overwhelmed and anxious ?`}</Text>
      <TouchableOpacity
        style={styles.skip}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUpAnSignIn")}
      >
        <Text style={[styles.skip1, styles.nextTypo]}>Skip</Text>
      </TouchableOpacity>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Onboard2")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </Pressable>
      <View style={[styles.rectangleParent, styles.buttonFlexBox]}>
        <View style={styles.frameChild} />
        <Image
          style={[styles.frameItem, styles.ml7]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.ml7]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
      <Image
        style={styles.onboard1Child}
        resizeMode="cover"
        source={require("../assets/group-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml7: {
    marginLeft: Margin.m_6xs,
  },
  nextTypo: {
    textAlign: "left",
    fontSize: 20,
    color: Color.white,
  },
  buttonFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  depressedOrFeeling: {
    top: 520,
    left: 63,
    fontSize: 16,
    fontFamily: FontFamily.openSansSemibold,
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    position: "absolute",
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
    paddingHorizontal: 19,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.orange,
  },
  frameChild: {
    borderRadius: 10,
    width: 30,
    height: 7,
    backgroundColor: Color.orange,
  },
  frameItem: {
    width: 7,
    height: 7,
  },
  rectangleParent: {
    top: 642,
    left: 158,
  },
  onboard1Child: {
    height: "31.8%",
    width: "70.67%",
    top: "20.69%",
    right: "14.67%",
    bottom: "47.51%",
    left: "14.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  onboard1: {
    backgroundColor: Color.darkslategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Onboard1;
