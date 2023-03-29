import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const ConfirmPayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmPayment}>
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("Payment")}
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
     
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        activeOpacity={0.2}
        onClick={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.payKsh}>PAY : KSH 500</Text>
      </TouchableOpacity>
      <Text style={styles.confirmPayment1}>{`Confirm Payment `}</Text>
      <Text style={styles.paymentInformation}>Payment Information</Text>
      <Text style={[styles.psychiastrist, styles.hourTypo]}>Psychiastrist</Text>
      <Text style={[styles.drJaneDoe, styles.hourTypo]}>Dr Jane Doe</Text>
      <Text style={[styles.thfeb2023, styles.dateTypo]}>4th,Feb 2023</Text>
      <Text style={[styles.am11am, styles.timeTypo]}>10am - 11am</Text>
      <Text style={[styles.hour, styles.hourTypo]}>1hour</Text>
      <Text style={[styles.hour1, styles.hourTypo]}>1hour</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.time, styles.timeTypo]}>Time</Text>
      <Text style={[styles.duration, styles.hourTypo]}>Duration</Text>
      <Text style={[styles.price, styles.hourTypo]}>Price</Text>
      <Image
        style={styles.confirmPaymentChild}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
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
  groupChildLayout: {
    height: 54,
    width: 315,
    position: "absolute",
  },
  hourTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: 20,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  dateTypo: {
    top: 310,
    fontFamily: FontFamily.openSansRegular,
    fontSize: 20,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  timeTypo: {
    top: 359,
    fontFamily: FontFamily.openSansRegular,
    fontSize: 20,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    top: 64,
    width: 40,
    height: 40,
    left: 26,
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
  groupChild: {
    borderRadius: 15,
    backgroundColor: Color.darkslategray,
    width: 315,
    top: 0,
    left: 0,
  },
  payKsh: {
    top: 16,
    left: 104,
    fontSize: 16,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    top: 697,
    left: 30,
    width: 315,
  },
  confirmPayment1: {
    top: 67,
    left: 109,
    fontSize: 18,
    color: Color.darkslategray,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  paymentInformation: {
    top: 176,
    fontSize: 20,
    color: Color.darkslategray,
    textAlign: "center",
    left: 30,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  psychiastrist: {
    top: 261,
    left: 24,
  },
  drJaneDoe: {
    top: 267,
    left: 212,
  },
  thfeb2023: {
    left: 206,
  },
  am11am: {
    left: 214,
  },
  hour: {
    top: 414,
    left: 239,
  },
  hour1: {
    top: 464,
    left: 237,
  },
  date: {
    left: 52,
  },
  time: {
    left: 45,
  },
  duration: {
    top: 408,
    left: 26,
  },
  price: {
    top: 457,
    left: 50,
  },
  confirmPaymentChild: {
    top: 118,
    left: 2,
    width: 375,
    height: 1,
    position: "absolute",
  },
  confirmPayment: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ConfirmPayment;
