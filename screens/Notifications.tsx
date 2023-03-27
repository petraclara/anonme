import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
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
      <View style={styles.status}>
        <Text style={[styles.pm, styles.pmTypo, styles.pmPosition]}>
          9:30pm
        </Text>
        <Image
          style={[
            styles.vectorIcon,
            styles.vectorIconLayout,
            styles.vectorIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[
            styles.vectorIcon2,
            styles.vectorIconLayout,
            styles.vectorIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Text
        style={[styles.notifications1, styles.youHaveNoFlexBox, styles.pmTypo]}
      >
        Notifications
      </Text>
      <Image
        style={[styles.buttomtabIcon, styles.pmPosition]}
        resizeMode="cover"
        source={require("../assets/buttom-tab1.png")}
      />
      <Text style={[styles.youHaveNo, styles.youHaveNoFlexBox]}>
        You have no notifications
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pmTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  pmPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    width: "5.83%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  youHaveNoFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 26,
    top: 69,
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
    top: 0,
    fontSize: 13,
    color: Color.black,
    textAlign: "left",
  },
  vectorIcon: {
    height: "55.56%",
    top: "16.67%",
    right: "0%",
    bottom: "27.78%",
    left: "94.17%",
  },
  vectorIcon1: {
    height: "88.89%",
    width: "5.39%",
    top: "0%",
    right: "13.63%",
    bottom: "11.11%",
    left: "80.98%",
  },
  vectorIcon2: {
    height: "77.78%",
    top: "5.56%",
    right: "6.71%",
    bottom: "16.67%",
    left: "87.46%",
  },
  status: {
    top: 6,
    left: 16,
    width: 343,
    height: 18,
    position: "absolute",
  },
  notifications1: {
    top: 72,
    left: 125,
    fontSize: 18,
    color: Color.darkslategray,
  },
  buttomtabIcon: {
    top: 749,
    width: 375,
    height: 45,
  },
  youHaveNo: {
    top: 143,
    left: 117,
    fontSize: 12,
    fontFamily: FontFamily.openSansRegular,
    color: "rgba(0, 0, 0, 0.63)",
  },
  notifications: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notifications;
