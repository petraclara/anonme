import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const AppointmentTime = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appointmentTime}>
      <View style={[styles.appointmentTimeChild, styles.appointmentPosition]} />
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("Booking")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/go-back.png")}
        />
      </Pressable>
      <View style={[styles.appointmentTimeItem, styles.appointmentPosition]} />
      <Image
        style={[styles.buttomtabIcon, styles.appointmentPosition]}
        resizeMode="cover"
        source={require("../assets/buttomtab3.png")}
      />
      <Image
        style={styles.homeIndicatorIcon}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu.png")}
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
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Payment")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.proceedToPayment, styles.proceedToPaymentTypo]}>
          PROCEED TO PAYMENT
        </Text>
      </TouchableOpacity>
      <Text
        style={[styles.selectYourAppointment, styles.proceedToPaymentTypo]}
      >{`Select Your
 Appointment Time`}</Text>
      <View style={[styles.monParent, styles.parentLayout1]}>
        <Text style={[styles.mon, styles.textTypo1]}>MON</Text>
        <Text style={[styles.text, styles.textPosition, styles.textTypo1]}>
          3
        </Text>
      </View>
      <View style={[styles.ellipseParent, styles.parentLayout]}>
        <Image
          style={[styles.groupItem, styles.parentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-117.png")}
        />
        <Text style={[styles.tue, styles.textTypo1]}>TUE</Text>
        <Text style={[styles.text1, styles.textTypo]}>4</Text>
      </View>
      <View
        style={[styles.wedParent, styles.parentLayout, styles.parentLayout1]}
      >
        <Text style={[styles.mon, styles.textTypo1]}>WED</Text>
        <Text style={[styles.textTypo, styles.textPosition]}>5</Text>
      </View>
      <View style={[styles.thurParent, styles.parentLayout1]}>
        <Text style={[styles.mon, styles.textTypo1]}>THUR</Text>
        <Text style={[styles.text3, styles.textPosition, styles.textTypo1]}>
          6
        </Text>
      </View>
      <View style={[styles.friParent, styles.parentLayout1]}>
        <Text style={[styles.mon, styles.textTypo1]}>FRI</Text>
        <Text style={[styles.text4, styles.textPosition, styles.textTypo1]}>
          7
        </Text>
      </View>
      <View style={[styles.satParent, styles.parentLayout1]}>
        <Text style={[styles.mon, styles.textTypo1]}>SAT</Text>
        <Text style={[styles.text5, styles.textPosition, styles.textTypo1]}>
          8
        </Text>
      </View>
      <Text style={[styles.selectYourAppointment1, styles.textTypo1]}>
        SELECT YOUR APPOINTMENT
      </Text>
      <View style={[styles.appointmentTimeInner, styles.hourChildShadowBox]} />
      <View style={styles.groupParent}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupChildShadowBox1]} />
          <View
            style={[
              styles.rectangleView,
              styles.groupChildShadowBox1,
              styles.groupChildShadowBox2,
            ]}
          />
          <Text style={[styles.am, styles.amTypo]}>11 AM</Text>
          <View
            style={[
              styles.groupChild1,
              styles.groupChildShadowBox1,
              styles.groupChildShadowBox2,
            ]}
          />
          <Text style={[styles.pm1, styles.textTypo1]}>2 PM</Text>
          <Text style={[styles.am1, styles.am1Typo]}>8 AM</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View
            style={[
              styles.groupChild2,
              styles.groupChildShadowBox1,
              styles.groupChildShadowBox2,
            ]}
          />
          <View
            style={[
              styles.groupChild3,
              styles.groupChildShadowBox,
              styles.groupChildBorder,
            ]}
          />
          <Text style={[styles.am, styles.amTypo]}>12 PM</Text>
          <View
            style={[
              styles.groupChild1,
              styles.groupChildShadowBox1,
              styles.groupChildShadowBox2,
            ]}
          />
          <Text style={[styles.pm1, styles.textTypo1]}>3 PM</Text>
          <Text style={[styles.am1, styles.am1Typo]}>9 AM</Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View
            style={[
              styles.groupChild2,
              styles.groupChildShadowBox1,
              styles.groupChildShadowBox2,
            ]}
          />
          <View
            style={[
              styles.rectangleView,
              styles.groupChildShadowBox1,
              styles.groupChildShadowBox2,
            ]}
          />
          <Text style={[styles.pm4, styles.amTypo]}>1 PM</Text>
          <View
            style={[
              styles.groupChild7,
              styles.groupChildShadowBox,
              styles.groupChildBorder,
            ]}
          />
          <Text style={[styles.pm1, styles.textTypo1]}>4 PM</Text>
          <Text style={[styles.am3, styles.am1Typo]}>10 AM</Text>
        </View>
      </View>
      <View style={styles.hourParent}>
        <View style={styles.hourChildLayout}>
          <View
            style={[
              styles.hourChild,
              styles.hourChildLayout,
              styles.hourChildShadowBox,
            ]}
          />
          <Text style={[styles.hour1, styles.hour1Typo]}>HOUR</Text>
          <Image
            style={styles.hourItem}
            resizeMode="cover"
            source={require("../assets/group-39.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.ml40]}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
        <View style={[styles.hourChildLayout, styles.ml40]}>
          <View
            style={[
              styles.minuteChild,
              styles.hourChildLayout,
              styles.groupChildShadowBox,
            ]}
          />
          <Text style={[styles.minutes, styles.hour1Typo]}>MINUTES</Text>
          <Image
            style={styles.hourItem}
            resizeMode="cover"
            source={require("../assets/group-39.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml40: {
    marginLeft: Margin.m_21xl,
  },
  appointmentPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
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
  proceedToPaymentTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  parentLayout1: {
    height: 46,
    top: 161,
  },
  textTypo1: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
  },
  textPosition: {
    top: 27,
    color: Color.black,
  },
  parentLayout: {
    width: 32,
    position: "absolute",
  },
  textTypo: {
    left: 12,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
  },
  hourChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupLayout: {
    width: 75,
    height: 149,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox1: {
    height: 39,
    width: 75,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChildShadowBox2: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 39,
  },
  amTypo: {
    top: 65,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  am1Typo: {
    top: 10,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: "rgba(0, 0, 0, 0.59)",
    borderWidth: 1,
    borderStyle: "solid",
    height: 39,
    width: 75,
    backgroundColor: Color.white,
  },
  hourChildLayout: {
    height: 66,
    width: 105,
  },
  hour1Typo: {
    fontSize: 10,
    top: 8,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  appointmentTimeChild: {
    top: 34,
    height: 97,
    backgroundColor: Color.darkslategray,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 26,
    top: 61,
    width: 40,
    height: 40,
    position: "absolute",
  },
  appointmentTimeItem: {
    top: 241,
    backgroundColor: Color.gainsboro_100,
    height: 494,
  },
  buttomtabIcon: {
    top: 749,
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
  menuIcon: {
    top: 77,
    left: 321,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
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
    top: 0,
    backgroundColor: Color.darkslategray,
    left: 0,
  },
  proceedToPayment: {
    top: 16,
    left: 67,
    fontSize: 16,
  },
  rectangleParent: {
    top: 654,
    left: 30,
  },
  selectYourAppointment: {
    left: 101,
    fontSize: 18,
    top: 55,
  },
  mon: {
    top: 0,
    color: Color.black,
    left: 0,
  },
  text: {
    left: 13,
  },
  monParent: {
    left: 32,
    width: 35,
    position: "absolute",
  },
  groupItem: {
    top: 19,
    height: 32,
    left: 0,
  },
  tue: {
    left: 4,
    top: 0,
    color: Color.black,
  },
  text1: {
    top: 26,
    color: Color.white,
    left: 12,
  },
  ellipseParent: {
    left: 88,
    height: 51,
    top: 161,
    width: 32,
  },
  wedParent: {
    left: 145,
  },
  text3: {
    left: 15,
  },
  thurParent: {
    left: 198,
    width: 38,
    position: "absolute",
  },
  text4: {
    left: 6,
  },
  friParent: {
    left: 263,
    width: 21,
    position: "absolute",
  },
  text5: {
    left: 8,
  },
  satParent: {
    left: 317,
    width: 25,
    position: "absolute",
  },
  selectYourAppointment1: {
    top: 273,
    left: 91,
    color: Color.black,
  },
  appointmentTimeInner: {
    top: 416,
    height: 188,
    width: 315,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 30,
  },
  groupInner: {
    shadowColor: "#f3a322",
    top: 0,
  },
  rectangleView: {
    top: 55,
  },
  am: {
    left: 17,
  },
  groupChild1: {
    top: 110,
  },
  pm1: {
    top: 120,
    left: 21,
    color: Color.black,
  },
  am1: {
    left: 21,
  },
  rectangleGroup: {
    left: 0,
  },
  groupChild2: {
    top: 0,
  },
  groupChild3: {
    top: 55,
  },
  rectangleContainer: {
    left: 95,
  },
  pm4: {
    left: 21,
  },
  groupChild7: {
    top: 110,
  },
  am3: {
    left: 17,
  },
  groupView: {
    left: 190,
  },
  groupParent: {
    top: 436,
    left: 55,
    width: 265,
    height: 149,
    position: "absolute",
  },
  hourChild: {
    top: 0,
    left: 0,
  },
  hour1: {
    left: 37,
  },
  hourItem: {
    top: 51,
    left: 18,
    width: 69,
    height: 1,
    position: "absolute",
  },
  frameChild: {
    width: 8,
    height: 31,
  },
  minuteChild: {
    backgroundColor: "#d9d9d9",
    borderColor: "rgba(0, 0, 0, 0.49)",
    borderWidth: 1,
    borderStyle: "solid",
    height: 66,
    width: 105,
    top: 0,
  },
  minutes: {
    left: 30,
  },
  hourParent: {
    top: 321,
    left: 39,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  appointmentTime: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AppointmentTime;
