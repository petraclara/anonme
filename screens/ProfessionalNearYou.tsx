import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const ProfessionalNearYou = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.professionalNearYou}>
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
          styles.professionalNearYou1,
          styles.professionalNearYou1FlexBox,
          styles.pmTypo,
        ]}
      >
        Professional Near You
      </Text>
    
      <Pressable
        style={[
          styles.ellipseParent,
          styles.groupParentLayout,
          styles.groupParentLayout1,
        ]}
        onPress={() => navigation.navigate("Booking")}
      >
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <View style={styles.nancyDrewParent}>
          <Text style={styles.nancyDrew}>Nancy Drew</Text>
          <Text
            style={[
              styles.addictionTherapistPhd,
              styles.professionalNearYou1FlexBox,
              styles.pmClr,
            ]}
          >
            Addiction Therapist, PHD
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-141.png")}
          />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </Pressable>
      <View
        style={[
          styles.professionalNearYouChild,
          styles.professionalChildLayout,
        ]}
      />
      <View
        style={[
          styles.ellipseGroup,
          styles.groupParentLayout,
          styles.groupParentLayout1,
        ]}
      >
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <View style={styles.nancyDrewParent}>
          <Text style={styles.nancyDrew}>Nancy Drew</Text>
          <Text
            style={[
              styles.addictionTherapistPhd,
              styles.professionalNearYou1FlexBox,
              styles.pmClr,
            ]}
          >
            Addiction Therapist, PHD
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-141.png")}
          />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </View>
      <View
        style={[
          styles.ellipseContainer,
          styles.groupParentLayout,
          styles.groupParentLayout1,
        ]}
      >
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <View style={styles.nancyDrewParent}>
          <Text style={styles.nancyDrew}>Nancy Drew</Text>
          <Text
            style={[
              styles.addictionTherapistPhd,
              styles.professionalNearYou1FlexBox,
              styles.pmClr,
            ]}
          >
            Addiction Therapist, PHD
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-141.png")}
          />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </View>
      <View
        style={[
          styles.groupView,
          styles.groupParentLayout,
          styles.groupParentLayout1,
        ]}
      >
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <View style={styles.nancyDrewParent}>
          <Text style={styles.nancyDrew}>Nancy Drew</Text>
          <Text
            style={[
              styles.addictionTherapistPhd,
              styles.professionalNearYou1FlexBox,
              styles.pmClr,
            ]}
          >
            Addiction Therapist, PHD
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-141.png")}
          />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </View>
      <View
        style={[
          styles.ellipseParent1,
          styles.groupParentLayout,
          styles.groupParentLayout1,
        ]}
      >
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <View style={styles.nancyDrewParent}>
          <Text style={styles.nancyDrew}>Nancy Drew</Text>
          <Text
            style={[
              styles.addictionTherapistPhd,
              styles.professionalNearYou1FlexBox,
              styles.pmClr,
            ]}
          >
            Addiction Therapist, PHD
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-141.png")}
          />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </View>
      <View
        style={[
          styles.ellipseParent2,
          styles.groupParentLayout,
          styles.groupParentLayout1,
        ]}
      >
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <View style={styles.nancyDrewParent}>
          <Text style={styles.nancyDrew}>Nancy Drew</Text>
          <Text
            style={[
              styles.addictionTherapistPhd,
              styles.professionalNearYou1FlexBox,
              styles.pmClr,
            ]}
          >
            Addiction Therapist, PHD
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-141.png")}
          />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </View>
      <View
        style={[
          styles.professionalNearYouChild,
          styles.professionalChildLayout,
        ]}
      />
      <View
        style={[
          styles.professionalNearYouInner,
          styles.professionalChildLayout,
        ]}
      />
      <View style={[styles.lineView, styles.professionalChildLayout]} />
      <View
        style={[
          styles.professionalNearYouChild1,
          styles.professionalChildLayout,
        ]}
      />
      <View
        style={[
          styles.professionalNearYouChild2,
          styles.professionalChildLayout,
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.professionalNearYouChild3, styles.rectangleViewLayout]}
      />
      <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      <Text style={[styles.bookLater, styles.availableTypo]}>Book Later</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pmClr: {
    color: Color.black,
    fontSize: 13,
    left: 0,
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
  professionalNearYou1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupParentLayout: {
    height: 63,
    position: "absolute",
  },
  groupParentLayout1: {
    width: 308,
    left: 34,
    height: 63,
  },
  professionalChildLayout: {
    height: 1,
    width: 316,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    left: 30,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 30,
    width: 120,
    backgroundColor: Color.darkslategray,
    borderRadius: 5,
    top: 123,
    position: "absolute",
  },
  availableTypo: {
    height: 21,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    top: 127,
    fontSize: 15,
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
    top: 2,
    textAlign: "left",
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
  professionalNearYou1: {
    top: 72,
    left: 88,
    fontSize: 18,
    color: Color.darkslategray,
  },
  buttomtabIcon: {
    top: 749,
    width: 375,
    height: 45,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    width: 63,
    top: 0,
    left: 0,
  },
  nancyDrew: {
    fontSize: 15,
    textAlign: "center",
    top: 0,
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  addictionTherapistPhd: {
    top: 22,
    fontFamily: FontFamily.openSansRegular,
  },
  groupItem: {
    top: 41,
    width: 51,
    height: 10,
    left: 0,
    position: "absolute",
  },
  nancyDrewParent: {
    left: 70,
    width: 152,
    height: 51,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 7,
    left: 292,
    width: 17,
    height: 15,
    position: "absolute",
  },
  ellipseParent: {
    top: 173,
  },
  professionalNearYouChild: {
    top: 249,
  },
  ellipseGroup: {
    top: 275,
  },
  ellipseContainer: {
    top: 377,
  },
  groupView: {
    top: 479,
  },
  ellipseParent1: {
    top: 581,
  },
  ellipseParent2: {
    top: 683,
  },
  professionalNearYouInner: {
    top: 351,
  },
  lineView: {
    top: 453,
  },
  professionalNearYouChild1: {
    top: 555,
  },
  professionalNearYouChild2: {
    top: 657,
  },
  rectangleView: {
    left: 54,
  },
  professionalNearYouChild3: {
    left: 202,
  },
  available: {
    left: 74,
    color: Color.orange,
  },
  bookLater: {
    left: 222,
    color: Color.white,
  },
  professionalNearYou: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfessionalNearYou;
