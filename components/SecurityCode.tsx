import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

type SecurityCodeType = {
  onClose?: () => void;
};

const SecurityCode = ({ onClose }: SecurityCodeType) => {
  return (
    <View style={styles.securityCode}>
      <View style={[styles.securityCodeChild, styles.lineIconPosition]} />
      <View style={styles.securityCodeItem} />
      <View style={styles.securityCodeInner} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.text, styles.okFlexBox]}>123</Text>
      <Text style={[styles.securityCodecvv, styles.itIsAPosition]}>
        Security code(CVV)
      </Text>
      <Text style={[styles.itIsA, styles.itIsAPosition]}>
        It is a 3-digit code located on the back side of your card.
      </Text>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.ok, styles.okFlexBox]}>OK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    left: 16,
    position: "absolute",
  },
  okFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  itIsAPosition: {
    left: 211,
    textAlign: "left",
    color: Color.gray_100,
    position: "absolute",
  },
  securityCodeChild: {
    top: 32,
    borderRadius: 12,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#29000e",
    borderWidth: 3,
    width: 180,
    height: 102,
  },
  securityCodeItem: {
    top: 89,
    left: 33,
    backgroundColor: Color.lightpink,
    width: 114,
    height: 16,
    position: "absolute",
  },
  securityCodeInner: {
    top: 45,
    left: 19,
    backgroundColor: Color.crimson,
    width: 174,
    height: 21,
    position: "absolute",
  },
  ellipseIcon: {
    top: 70,
    left: 130,
    width: 56,
    height: 56,
    position: "absolute",
  },
  text: {
    top: 93,
    left: 148,
    lineHeight: 9,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.gray_100,
    textAlign: "left",
    fontSize: 12,
  },
  securityCodecvv: {
    top: 31,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  itIsA: {
    top: 52,
    fontFamily: FontFamily.poppinsRegular,
    width: 164,
    height: 53,
    fontSize: 12,
    left: 211,
  },
  lineIcon: {
    top: 164,
    width: 338,
    height: 3,
  },
  ok: {
    top: 201,
    left: 277,
    fontSize: 16,
    letterSpacing: 0.6,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.crimson,
  },
  securityCode: {
    backgroundColor: Color.lavenderblush,
    width: 375,
    height: 237,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default SecurityCode;
