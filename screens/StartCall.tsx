import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const StartCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startCall}>
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("AvailableSpeakers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/go-back.png")}
        />
      </Pressable>
      <Image
        style={styles.homeIndicatorIcon}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      />
      <View style={styles.status}>
        <Text style={styles.pm}>9:30pm</Text>
        <Image
          style={[styles.batteryThreeQuartersIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters.png")}
        />
        <Image
          style={[styles.signalIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
      </View>
      <Text style={[styles.startCall1, styles.startTypo]}>Start Call</Text>
      <View style={[styles.anonParent, styles.parentLayout]}>
        <Text style={[styles.anon, styles.youTypo]}>Anon</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-43.png")}
        />
      </View>
      <View style={[styles.youParent, styles.parentLayout]}>
        <Text style={[styles.you, styles.youTypo]}>You</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-431.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.startACall, styles.startTypo]}>START A CALL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 20,
    top: 0,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  startTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  parentLayout: {
    height: 145,
    left: 130,
    width: 114,
    position: "absolute",
  },
  youTypo: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: 17,
    top: 122,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 54,
    width: 315,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 26,
    top: 58,
    width: 40,
    height: 40,
    position: "absolute",
  },
  homeIndicatorIcon: {
    marginLeft: -45.5,
    bottom: 8,
    left: "50%",
    borderRadius: 83,
    width: 91,
    height: 3,
    position: "absolute",
  },
  pm: {
    top: 2,
    fontSize: 13,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  batteryThreeQuartersIcon: {
    left: 323,
  },
  signalIcon: {
    left: 277,
  },
  wifiIcon: {
    left: 300,
  },
  status: {
    top: 6,
    left: 16,
    width: 343,
    height: 20,
    position: "absolute",
  },
  startCall1: {
    top: 62,
    left: 147,
    fontSize: 18,
    color: Color.darkslategray,
  },
  anon: {
    left: 35,
  },
  groupChild: {
    height: 114,
    width: 114,
    top: 0,
    left: 0,
    position: "absolute",
  },
  anonParent: {
    top: 375,
  },
  you: {
    left: 41,
  },
  youParent: {
    top: 186,
  },
  groupInner: {
    borderRadius: 15,
    backgroundColor: Color.darkslategray,
    top: 0,
    width: 315,
    left: 0,
  },
  startACall: {
    top: 16,
    left: 104,
    fontSize: 16,
    color: Color.white,
  },
  rectangleParent: {
    top: 694,
    left: 30,
  },
  startCall: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default StartCall;
