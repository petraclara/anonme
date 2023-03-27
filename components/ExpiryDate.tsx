import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

type ExpiryDateType = {
  onClose?: () => void;
};

const ExpiryDate = ({ onClose }: ExpiryDateType) => {
  return (
    <View style={styles.expiryDate}>
      <View style={[styles.expiryDateChild, styles.lineIconPosition]} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
      </View>
      <View style={[styles.frameView, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
      </View>
      <View style={styles.expiryDateItem} />
      <Image
        style={styles.expiryDateInner}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text
        style={[styles.validThru, styles.okFlexBox, styles.validThruTypo]}
      >{`VALID
THRU`}</Text>
      <Text style={[styles.text, styles.textTypo]}>01/20</Text>
      <Text
        style={[styles.expiryDate1, styles.okFlexBox, styles.validThruTypo]}
      >
        Expiry Date
      </Text>
      <Text
        style={[styles.thisDateIs, styles.textTypo]}
      >{`This date is located on the front side of your card, right below the card number. `}</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-11.png")}
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
  rectangleLayout: {
    height: 6,
    width: 33,
    top: 57,
    position: "absolute",
  },
  frameLayout: {
    height: 13,
    width: 6,
    backgroundColor: Color.crimson,
    top: 0,
    position: "absolute",
  },
  okFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  validThruTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  textTypo: {
    fontSize: 12,
    textAlign: "left",
    color: Color.gray_100,
    position: "absolute",
  },
  expiryDateChild: {
    top: 32,
    borderRadius: 12,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#29000e",
    borderWidth: 3,
    width: 180,
    height: 102,
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 9,
  },
  frameInner: {
    left: 18,
  },
  rectangleView: {
    left: 27,
  },
  rectangleParent: {
    left: 25,
  },
  rectangleGroup: {
    left: 68,
  },
  rectangleContainer: {
    left: 112,
  },
  frameView: {
    left: 155,
  },
  expiryDateItem: {
    top: 89,
    left: 33,
    borderRadius: 18,
    backgroundColor: Color.lightpink,
    width: 114,
    height: 16,
    position: "absolute",
  },
  expiryDateInner: {
    top: 70,
    left: 130,
    width: 56,
    height: 56,
    position: "absolute",
  },
  validThru: {
    top: 92,
    left: 133,
    fontSize: 7,
    lineHeight: 6,
  },
  text: {
    top: 95,
    left: 152,
    lineHeight: 9,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  expiryDate1: {
    top: 31,
    left: 211,
    fontSize: 14,
  },
  thisDateIs: {
    top: 52,
    left: 206,
    fontFamily: FontFamily.poppinsRegular,
    width: 151,
    height: 66,
  },
  lineIcon: {
    top: 166,
    width: 338,
    height: 2,
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
  expiryDate: {
    backgroundColor: Color.lavenderblush,
    width: 375,
    height: 237,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ExpiryDate;
