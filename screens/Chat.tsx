import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
      <Pressable
        style={[
          styles.goBack,
          styles.unsplashbi91nrppe38IconLayout,
          styles.unsplashbi91nrppe38IconLayout1,
        ]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Messages" })
        }
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/go-back.png")}
        />
      </Pressable>
      <Text style={[styles.amanGupta, styles.pmTypo]}>Aman Gupta</Text>
      <View style={[styles.bottomBar, styles.unsplashbi91nrppe38IconLayout]}>
        <View style={styles.bottomBarChild} />
        <Image
          style={[styles.recorderIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/recorder-icon.png")}
        />
        <Text style={[styles.text, styles.pmPosition]}>+</Text>
        <Image
          style={[
            styles.smileyIcon,
            styles.iconLayout1,
            styles.iconLayout2,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/smiley-icon.png")}
        />
        <Image
          style={[
            styles.attachmentIcon,
            styles.iconLayout1,
            styles.iconLayout2,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/attachment-icon.png")}
        />
        <Image
          style={styles.cameraIcon}
          resizeMode="cover"
          source={require("../assets/camera-icon.png")}
        />
        <Text style={styles.text1}>|</Text>
      </View>
      <Image
        style={styles.homeIndicatorIcon}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      />
      <View style={[styles.status, styles.iconLayout1]}>
        <Text style={[styles.pm, styles.pmPosition, styles.pmTypo]}>
          9:30pm
        </Text>
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout1,
            styles.iconLayout2,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters.png")}
        />
        <Image
          style={[styles.signalIcon, styles.iconLayout1, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconLayout1, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
      </View>
      <Text style={[styles.saturdayMarch14, styles.todayTypo]}>
        Saturday, March 14, 2022
      </Text>
      <View style={[styles.msg1, styles.msgLayout]}>
        <Text style={[styles.pm1, styles.pm1Typo]}>10:30 PM</Text>
        <View style={[styles.msg1Child, styles.childPosition1]} />
        <Text style={[styles.tomorrowDefinitely, styles.okieDokieTypo]}>
          Tomorrow definitely
        </Text>
      </View>
      <View style={[styles.msg2, styles.msgPosition]}>
        <Text style={[styles.pm2, styles.pm1Typo]}>10:38 PM</Text>
        <Image
          style={[
            styles.unsplashbi91nrppe38Icon,
            styles.unsplashbi91nrppe38IconLayout,
            styles.unsplashbi91nrppe38IconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/unsplashbi91nrppe38.png")}
        />
        <View style={[styles.msg2Child, styles.childPosition]} />
        <Text style={[styles.okieDokie, styles.okieDokieTypo]}>Okie Dokie</Text>
        <Image
          style={[styles.image6Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={[styles.image7Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <View style={[styles.msg3, styles.msgLayout]}>
        <Text style={[styles.pm1, styles.pm1Typo]}>07:00 PM</Text>
        <View style={[styles.msg3Child, styles.childPosition1]} />
        <Text style={[styles.tomorrowDefinitely, styles.okieDokieTypo]}>
          Done, my friend
        </Text>
      </View>
      <View style={[styles.msg4, styles.msgPosition]}>
        <Text style={[styles.pm4, styles.pm1Typo]}>10:30 PM</Text>
        <Image
          style={[
            styles.unsplashbi91nrppe38Icon,
            styles.unsplashbi91nrppe38IconLayout,
            styles.unsplashbi91nrppe38IconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/unsplashbi91nrppe38.png")}
        />
        <View style={[styles.msg4Child, styles.childPosition]} />
        <Text style={[styles.okieDokie, styles.okieDokieTypo]}>
          I will do the voice over
        </Text>
      </View>
      <Image
        style={[
          styles.unsplashbi91nrppe38Icon2,
          styles.unsplashbi91nrppe38IconLayout,
          styles.unsplashbi91nrppe38IconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/unsplashbi91nrppe38.png")}
      />
      <View style={styles.chatInner}>
        <View style={styles.phoneParent}>
          <Image
            style={[styles.phoneIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/phone.png")}
          />
          <Image
            style={[styles.iconLayout3, styles.ml12]}
            resizeMode="cover"
            source={require("../assets/three-dots.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 12,
  },
  unsplashbi91nrppe38IconLayout: {
    height: 40,
    position: "absolute",
  },
  unsplashbi91nrppe38IconLayout1: {
    width: 40,
    height: 40,
  },
  pmTypo: {
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  iconLayout3: {
    height: 24,
    width: 24,
  },
  pmPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    position: "absolute",
  },
  iconLayout2: {
    width: 20,
    height: 20,
  },
  iconPosition: {
    top: 10,
    width: 20,
  },
  todayTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    textAlign: "left",
    lineHeight: 8,
    color: Color.black,
    position: "absolute",
  },
  msgLayout: {
    height: 32,
    position: "absolute",
  },
  pm1Typo: {
    fontSize: 10,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    lineHeight: 8,
    color: Color.black,
    position: "absolute",
  },
  childPosition1: {
    backgroundColor: Color.darkslategray,
    left: 61,
    height: 32,
    borderRadius: 20,
    top: 0,
    position: "absolute",
  },
  okieDokieTypo: {
    color: Color.white,
    fontSize: 12,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    lineHeight: 8,
    position: "absolute",
  },
  msgPosition: {
    left: 31,
    height: 40,
    position: "absolute",
  },
  childPosition: {
    left: 56,
    top: 4,
    backgroundColor: Color.darkslategray,
    height: 32,
    borderRadius: 20,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
    top: 12,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 26,
    top: 69,
  },
  amanGupta: {
    top: 73,
    left: 142,
    fontSize: 18,
    textAlign: "center",
    position: "absolute",
  },
  bottomBarChild: {
    left: 42,
    borderStyle: "solid",
    borderColor: "#26646f",
    borderWidth: 1,
    width: 250,
    borderRadius: 20,
    top: 0,
    height: 40,
    position: "absolute",
    backgroundColor: Color.white,
  },
  recorderIcon: {
    top: 8,
    left: 308,
    position: "absolute",
  },
  text: {
    top: 13,
    fontSize: 40,
    fontWeight: "200",
    fontFamily: FontFamily.interExtralight,
    width: 26,
    height: 19,
    color: Color.darkslategray,
    lineHeight: 8,
    textAlign: "left",
  },
  smileyIcon: {
    left: 58,
  },
  attachmentIcon: {
    left: 218,
  },
  cameraIcon: {
    top: 9,
    left: 254,
    width: 22,
    height: 22,
    position: "absolute",
  },
  text1: {
    left: 86,
    fontSize: 17,
    width: 4,
    height: 7,
    fontFamily: FontFamily.interRegular,
    top: 16,
    textAlign: "left",
    color: Color.darkslategray,
    lineHeight: 8,
    position: "absolute",
  },
  bottomBar: {
    top: 749,
    left: 22,
    width: 332,
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
  },
  batteryThreeQuartersIcon: {
    left: 323,
    top: 0,
    overflow: "hidden",
  },
  signalIcon: {
    left: 277,
    top: 0,
    overflow: "hidden",
  },
  wifiIcon: {
    left: 300,
    top: 0,
    overflow: "hidden",
  },
  status: {
    top: 6,
    left: 16,
    width: 343,
  },
  saturdayMarch14: {
    top: "18.35%",
    left: "32.53%",
  },
  pm1: {
    top: 12,
    left: 0,
  },
  msg1Child: {
    width: 145,
  },
  tomorrowDefinitely: {
    left: 77,
    top: 12,
  },
  msg1: {
    top: 185,
    left: 138,
    width: 206,
  },
  pm2: {
    left: 210,
    top: 16,
  },
  unsplashbi91nrppe38Icon: {
    left: 0,
    top: 0,
  },
  msg2Child: {
    width: 138,
  },
  okieDokie: {
    left: 72,
    top: 16,
  },
  image6Icon: {
    left: 140,
  },
  image7Icon: {
    left: 162,
  },
  msg2: {
    top: 229,
    width: 255,
  },
  today: {
    top: "37.07%",
    left: "47.47%",
  },
  msg3Child: {
    width: 122,
  },
  msg3: {
    top: 337,
    width: 183,
    left: 140,
  },
  pm4: {
    left: 231,
    top: 16,
  },
  msg4Child: {
    width: 159,
  },
  msg4: {
    top: 381,
    width: 276,
  },
  unsplashbi91nrppe38Icon2: {
    top: 66,
    left: 80,
  },
  phoneIcon: {
    overflow: "hidden",
  },
  phoneParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatInner: {
    top: 71,
    left: 299,
    position: "absolute",
  },
  chat: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Chat;
