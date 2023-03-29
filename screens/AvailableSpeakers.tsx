import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const AvailableSpeakers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.availableSpeakers}>
      <Pressable
        style={styles.goBack}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "false" })
        }
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
      
      <Text
        style={[
          styles.availableSpeakers1,
          styles.speaker2FlexBox,
          styles.pmTypo,
        ]}
      >
        Available Speakers
      </Text>

      <View style={[styles.speaker2Parent, styles.parentLayout]}>
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 2</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-432.png")}
        />
      </View>
      <View style={[styles.speaker4Parent, styles.parentLayout]}>
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 4</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-433.png")}
        />
      </View>
      <View style={[styles.speaker6Parent, styles.parentLayout]}>
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 6</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-434.png")}
        />
      </View>
      <View style={[styles.speaker8Parent, styles.parentLayout]}>
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 8</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-435.png")}
        />
      </View>
      <Pressable
        style={[styles.speaker1Parent, styles.parentPosition]}
        onPress={() => navigation.navigate("StartCall")}
      >
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 1</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-436.png")}
        />
      </Pressable>
      <View style={[styles.speaker3Parent, styles.parentPosition]}>
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 3</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-437.png")}
        />
      </View>
      <View style={[styles.speaker5Parent, styles.parentPosition]}>
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 5</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-438.png")}
        />
      </View>
      <View style={[styles.speaker7Parent, styles.parentPosition]}>
        <Text style={[styles.speaker2, styles.speaker2FlexBox]}>Speaker 7</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-439.png")}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  pmPosition: {
    left: 0,
    position: "absolute",
  },
  pmTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  iconLayout: {
    width: 20,
    top: 0,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  speaker2FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  parentLayout: {
    height: 137,
    left: 225,
    width: 114,
    position: "absolute",
  },
  parentPosition: {
    left: 36,
    height: 137,
    width: 114,
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
  buttomtabIcon: {
    top: 749,
    width: 375,
    height: 45,
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
    width: 343,
    height: 20,
    left: 16,
    position: "absolute",
  },
  availableSpeakers1: {
    top: 62,
    left: 103,
    fontSize: 18,
    color: Color.darkslategray,
  },
  speaker2: {
    top: 114,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.black,
    left: 16,
    textAlign: "center",
  },
  groupChild: {
    height: 114,
    width: 114,
    top: 0,
    left: 0,
    position: "absolute",
  },
  speaker2Parent: {
    top: 116,
  },
  speaker4Parent: {
    top: 272,
  },
  speaker6Parent: {
    top: 429,
  },
  speaker8Parent: {
    top: 585,
  },
  speaker1Parent: {
    top: 116,
  },
  speaker3Parent: {
    top: 272,
  },
  speaker5Parent: {
    top: 429,
  },
  speaker7Parent: {
    top: 585,
  },
  availableSpeakers: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AvailableSpeakers;
