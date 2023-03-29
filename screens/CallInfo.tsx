import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const CallInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.callInfo}>
      <Pressable
        style={styles.goBack}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Call" })
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
      <Text style={styles.callInfo1}>Call Info</Text>
      <Image
        style={styles.callInfoChild}
        resizeMode="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <Text style={styles.nancyDrew}>Nancy Drew</Text>
      <Text style={[styles.outgoingCall, styles.callTypo]}>Outgoing Call</Text>
      <Text
        style={[styles.thFeb2022, styles.febTypo, styles.textPosition]}
      >{`12th Feb,2022 `}</Text>
      <View style={styles.callInfoItem} />
      <Text style={[styles.text, styles.textTypo, styles.textPosition]}>
        8:12
      </Text>
      <Image
        style={[styles.callInfoInner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-21.png")}
      />
      <Text style={[styles.incomingCall, styles.callTypo]}>Incoming Call</Text>
      <Text
        style={[styles.thFeb20221, styles.text1Position, styles.febTypo]}
      >{`12th Feb,2022 `}</Text>
      <Text style={[styles.text1, styles.text1Position, styles.textTypo]}>
        8:12
      </Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    width: 20,
    overflow: "hidden",
  },
  callTypo: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
    fontSize: 13,
    position: "absolute",
  },
  febTypo: {
    height: 16,
    width: 77,
    color: Color.gray_200,
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    textAlign: "left",
  },
  textPosition: {
    alignItems: "center",
    display: "flex",
    left: 133,
    position: "absolute",
  },
  textTypo: {
    height: 18,
    width: 27,
    justifyContent: "center",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: 13,
  },
  text1Position: {
    left: 128,
    alignItems: "center",
    display: "flex",
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
  buttomtabIcon: {
    top: 749,
    width: 375,
    height: 45,
    left: 0,
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
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: 13,
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
  callInfo1: {
    top: 72,
    left: 150,
    color: Color.darkslategray,
    textAlign: "center",
    fontSize: 18,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  callInfoChild: {
    top: 181,
    left: 32,
    width: 58,
    height: 58,
    position: "absolute",
  },
  nancyDrew: {
    top: 198,
    left: 133,
    textAlign: "center",
    fontSize: 18,
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  outgoingCall: {
    top: 249,
    left: 137,
  },
  thFeb2022: {
    top: 275,
  },
  callInfoItem: {
    top: 351,
    left: 30,
    borderStyle: "solid",
    borderColor: "#26646f",
    borderTopWidth: 1,
    width: 316,
    height: 1,
    position: "absolute",
  },
  text: {
    top: 299,
  },
  callInfoInner: {
    top: 254,
    left: 66,
  },
  incomingCall: {
    top: 384,
    left: 134,
  },
  thFeb20221: {
    top: 410,
  },
  text1: {
    top: 434,
  },
  arrowIcon: {
    top: 391,
    left: 59,
    width: 22,
    height: 19,
    position: "absolute",
  },
  callInfo: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CallInfo;
