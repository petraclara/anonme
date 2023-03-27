import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const DepressionGroup = () => {
  return (
    <View style={styles.depressionGroup}>
      <Image
        style={styles.goBackIcon}
        resizeMode="cover"
        source={require("../assets/go-back.png")}
      />
      <Image
        style={styles.homeIndicatorIcon}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      />
      <Image
        style={styles.depressionGroupChild}
        resizeMode="cover"
        source={require("../assets/group-221.png")}
      />
      <View style={styles.status}>
        <Text style={styles.pm}>9:30pm</Text>
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
      <View
        style={[
          styles.rectangleParent,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={styles.depressionCanBe}>
          Depression can be serious so it’s better to talk about it as life...
        </Text>
        <Text style={[styles.depressionGroup1, styles.joinNowTypo1]}>
          Depression Group
        </Text>
        <Text style={[styles.joinNow, styles.joinNowTypo, styles.joinNowTypo1]}>
          Join Now
        </Text>
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={styles.depressionCanBe}>
          Join our anxiety group as we try to ...
        </Text>
        <Text style={[styles.depressionGroup1, styles.joinNowTypo1]}>
          Anxiety Group
        </Text>
        <Text style={[styles.joinNow, styles.joinNowTypo, styles.joinNowTypo1]}>
          Join Now
        </Text>
      </View>
      <View
        style={[
          styles.rectangleContainer,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.lifeIsShort, styles.lifeIsShortTypo]}>
          Life is short. It can be pretty difficult, especially when you go...
        </Text>
        <Text style={[styles.depressionGroup1, styles.joinNowTypo1]}>
          Life Problems Group
        </Text>
        <Text style={[styles.joinNow, styles.joinNowTypo, styles.joinNowTypo1]}>
          Join Now
        </Text>
      </View>
      <View
        style={[
          styles.groupView,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.areYouFeeling, styles.lifeIsShortTypo]}>
          Are you feeling sad or dejected? Join our group today! We talk
          about...
        </Text>
        <Text style={[styles.depressionGroup1, styles.joinNowTypo1]}>
          Sadness Group
        </Text>
        <Text style={[styles.joinNow, styles.joinNowTypo, styles.joinNowTypo1]}>
          Join Now
        </Text>
      </View>
      <View
        style={[
          styles.rectangleParent1,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.areYouFeeling, styles.lifeIsShortTypo]}>
          Stress is bad.Trauma can be worse.We share stories here,we try to
          get...
        </Text>
        <Text style={[styles.depressionGroup1, styles.joinNowTypo1]}>
          PTSD Group
        </Text>
        <Text style={[styles.joinNow, styles.joinNowTypo, styles.joinNowTypo1]}>
          Join Now
        </Text>
      </View>
      <Text
        style={[styles.dealingWithDepression, styles.joinNowTypo]}
      >{`Dealing With Depression
And Anxiety
`}</Text>
      <Image
        style={styles.buttomtabIcon}
        resizeMode="cover"
        source={require("../assets/buttom-tab1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  groupParentLayout: {
    height: 103,
    width: 267,
    position: "absolute",
  },
  groupParentPosition: {
    left: 54,
    width: 267,
  },
  joinNowTypo1: {
    textDecoration: "underline",
    fontSize: 12,
    textAlign: "left",
  },
  joinNowTypo: {
    color: Color.darkslategray,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  lifeIsShortTypo: {
    width: 191,
    height: 22,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    left: 17,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  goBackIcon: {
    left: 26,
    width: 40,
    height: 40,
    top: 69,
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
  depressionGroupChild: {
    left: 321,
    width: 23,
    height: 27,
    top: 69,
    position: "absolute",
  },
  pm: {
    fontSize: 13,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
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
    top: 8,
    left: 16,
    width: 343,
    height: 18,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: Color.whitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    width: 267,
    top: 0,
  },
  depressionCanBe: {
    top: 47,
    width: 185,
    height: 22,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    left: 17,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  depressionGroup1: {
    top: 22,
    left: 17,
    textDecoration: "underline",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  joinNow: {
    top: 75,
    left: 203,
  },
  rectangleParent: {
    top: 133,
  },
  rectangleGroup: {
    top: 259,
  },
  lifeIsShort: {
    top: 48,
  },
  rectangleContainer: {
    top: 385,
  },
  areYouFeeling: {
    top: 51,
  },
  groupView: {
    top: 511,
  },
  rectangleParent1: {
    top: 637,
  },
  dealingWithDepression: {
    left: 81,
    fontSize: 18,
    textAlign: "center",
    top: 69,
  },
  buttomtabIcon: {
    top: 749,
    width: 375,
    height: 45,
    left: 0,
    position: "absolute",
  },
  depressionGroup: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default DepressionGroup;
