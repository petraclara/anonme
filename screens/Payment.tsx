import * as React from "react";
import { useState, useCallback } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpiryDate from "../components/ExpiryDate";
import SecurityCode from "../components/SecurityCode";
import { Color, FontFamily } from "../GlobalStyles";

const Payment = () => {
  const navigation = useNavigation();
  const [questionCircleIconVisible, setQuestionCircleIconVisible] =
    useState(false);
  const [questionCircleIcon1Visible, setQuestionCircleIcon1Visible] =
    useState(false);

  const openQuestionCircleIcon = useCallback(() => {
    setQuestionCircleIconVisible(true);
  }, []);

  const closeQuestionCircleIcon = useCallback(() => {
    setQuestionCircleIconVisible(false);
  }, []);

  const openQuestionCircleIcon1 = useCallback(() => {
    setQuestionCircleIcon1Visible(true);
  }, []);

  const closeQuestionCircleIcon1 = useCallback(() => {
    setQuestionCircleIcon1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.payment}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("AppointmentTime")}
        >
          <Image
            style={styles.iconLayout2}
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
          onPress={() => navigation.navigate("ConfirmPayment")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={styles.proceedToConfirm}>PROCEED TO CONFIRM</Text>
        </TouchableOpacity>
        <Text style={[styles.payment1, styles.paymentTypo]}>Payment</Text>
        <Text style={[styles.paymentMethod, styles.paymentTypo]}>
          Payment Method
        </Text>
        <View style={styles.paymentChild} />
        <View style={[styles.paymentItem, styles.paymentPosition]} />
        <View style={[styles.paymentInner, styles.paymentPosition]} />
        <Text style={[styles.cardNumber, styles.orTypo]}>Card Number</Text>
        <Text style={[styles.or, styles.orTypo]}>or</Text>
        <Text style={[styles.expiryDate, styles.cvvTypo]}>Expiry date</Text>
        <Text style={[styles.cvv, styles.cvvTypo]}>CVV</Text>
        <Pressable
          style={[
            styles.questionCircle,
            styles.iconLayout,
            styles.questionPosition,
          ]}
          onPress={openQuestionCircleIcon}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/questioncircle.png")}
          />
        </Pressable>
        <Pressable
          style={[
            styles.questionCircle1,
            styles.iconLayout,
            styles.questionPosition,
          ]}
          onPress={openQuestionCircleIcon1}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/questioncircle.png")}
          />
        </Pressable>
        <Image
          style={[styles.cameraIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/camera.png")}
        />
        <Text style={[styles.rememberMe, styles.orTypo]}>Remember me</Text>
        <Image
          style={[styles.checkSquareIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/checksquare.png")}
        />
        <Image
          style={[styles.ccVisaIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ccvisa.png")}
        />
        <Image
          style={styles.ccMastercardIcon}
          resizeMode="cover"
          source={require("../assets/ccmastercard.png")}
        />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={questionCircleIconVisible}
      >
        <View style={styles.questionCircleIconOverlay}>
          <Pressable
            style={styles.questionCircleIconBg}
            onPress={closeQuestionCircleIcon}
          />
          <ExpiryDate onClose={closeQuestionCircleIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={questionCircleIcon1Visible}
      >
        <View style={styles.questionCircleIcon1Overlay}>
          <Pressable
            style={styles.questionCircleIcon1Bg}
            onPress={closeQuestionCircleIcon1}
          />
          <SecurityCode onClose={closeQuestionCircleIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
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
  paymentTypo: {
    color: Color.darkslategray,
    fontSize: 18,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  paymentPosition: {
    height: 56,
    top: 436,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  orTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  cvvTypo: {
    top: 407,
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 14,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  questionPosition: {
    top: 452,
    width: 25,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 26,
    top: 64,
    width: 40,
    height: 40,
    position: "absolute",
  },
  homeIndicatorIcon: {
    marginLeft: -45.5,
    bottom: 8,
    left: "50%",
    borderRadius: 83,
    height: 3,
    width: 91,
    position: "absolute",
  },
  pm: {
    top: 2,
    fontSize: 13,
    color: Color.black,
    textAlign: "left",
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
    top: 0,
    width: 315,
    left: 0,
  },
  proceedToConfirm: {
    top: 16,
    left: 68,
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
  },
  payment1: {
    top: 66,
    left: 148,
  },
  paymentMethod: {
    top: 176,
    left: 39,
  },
  paymentChild: {
    top: 332,
    height: 49,
    backgroundColor: Color.gainsboro_100,
    width: 315,
    left: 30,
    position: "absolute",
  },
  paymentItem: {
    width: 148,
    left: 30,
  },
  paymentInner: {
    left: 218,
    width: 91,
  },
  cardNumber: {
    top: 303,
    fontSize: 14,
    fontFamily: FontFamily.poppinsRegular,
    left: 30,
  },
  or: {
    top: 244,
    left: 70,
    fontSize: 12,
  },
  expiryDate: {
    left: 30,
  },
  cvv: {
    left: 218,
  },
  questionCircleIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  questionCircleIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    overflow: "hidden",
  },
  questionCircle: {
    left: 185,
  },
  questionCircleIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  questionCircleIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  questionCircle1: {
    left: 320,
  },
  cameraIcon: {
    top: 344,
    left: 309,
    overflow: "hidden",
  },
  rememberMe: {
    top: 520,
    left: 63,
    fontSize: 15,
  },
  checkSquareIcon: {
    top: 517,
    left: 30,
    overflow: "hidden",
  },
  ccVisaIcon: {
    top: 241,
    left: 30,
    overflow: "hidden",
  },
  ccMastercardIcon: {
    top: 238,
    left: 94,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 118,
    left: 2,
    width: 375,
    height: 1,
    position: "absolute",
  },
  payment: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Payment;
