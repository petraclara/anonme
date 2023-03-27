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

const Booking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.booking}>
      <Image
        style={[styles.bookingChild, styles.bookingChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-22.png")}
      />
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("ProfessionalNearYou")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/go-back.png")}
        />
      </Pressable>
      <Image
        style={[styles.buttomtabIcon, styles.bookingChildPosition]}
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
        <Text style={[styles.pm, styles.pmTypo]}>9:30pm</Text>
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
      <Text
        style={[
          styles.addictionTherapistPhd,
          styles.hrFlexBox,
          styles.hrTypo,
          styles.hrTypo1,
        ]}
      >
        Addiction Therapist, PHD
      </Text>
      <Text
        style={[styles.aMastersDegree, styles.availableFlexBox, styles.hrTypo]}
      >{`A master’s Degree and Doctorate
holder in Psychology, Jane Doe is a world
renowned psychiatrist with several 
awards`}</Text>
      <Text
        style={[styles.hr, styles.hrFlexBox, styles.hrTypo, styles.hrTypo1]}
      >
        50$/hr
      </Text>
      <Text
        style={[
          styles.rating455,
          styles.hrFlexBox,
          styles.hrTypo,
          styles.hrTypo1,
        ]}
      >
        Rating 4.5/5
      </Text>
      <Text
        style={[
          styles.langatanairobi,
          styles.hrFlexBox,
          styles.hrTypo,
          styles.hrTypo1,
        ]}
      >
        Langata,Nairobi
      </Text>
      <View style={[styles.bookingItem, styles.availableLayout]} />
      <Text
        style={[
          styles.available,
          styles.availableClr,
          styles.moreTypo,
          styles.availableLayout,
          styles.availableFlexBox,
        ]}
      >
        Available
      </Text>
      <View style={styles.johnDoeParent}>
        <Text style={[styles.johnDoe, styles.hrFlexBox, styles.pmTypo]}>
          John Doe
        </Text>
        <Text style={[styles.about, styles.aboutTypo]}>About</Text>
        <Text style={[styles.checkCertifications, styles.aboutTypo]}>
          Check certifications
        </Text>
        <Text style={[styles.reviews, styles.moreTypo, styles.hrFlexBox]}>
          Reviews
        </Text>
        <Image
          style={styles.image8Icon}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
      </View>
      <View style={[styles.bookingInner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <View
        style={[
          styles.rectangleParent,
          styles.groupLayout,
          styles.groupPosition,
        ]}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.drJohnDoe, styles.johnTypo]}>
          Dr John Doe is a reputable therapist
        </Text>
        <Text
          style={[
            styles.jessiccaJones,
            styles.groupItemPosition,
            styles.availableFlexBox,
            styles.pmTypo,
          ]}
        >
          Jessicca Jones
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-14.png")}
        />
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.groupLayout,
          styles.groupPosition,
        ]}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text
          style={[styles.groupItemPosition, styles.johnTypo]}
        >{`Dr John Doe is a reputable therapist
She helped me so much.`}</Text>
        <Text style={styles.johnTypo}>{`Dr John Doe is a reputable therapist
She helped me so much.`}</Text>
        <Text
          style={[
            styles.jessiccaJones,
            styles.groupItemPosition,
            styles.availableFlexBox,
            styles.pmTypo,
          ]}
        >
          Peter Drum
        </Text>
        <Text
          style={[
            styles.jessiccaJones,
            styles.groupItemPosition,
            styles.availableFlexBox,
            styles.pmTypo,
          ]}
        >
          Peter Drum
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-14.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-14.png")}
        />
      </View>
      <TouchableOpacity
        style={[styles.rectangleContainer, styles.groupChild2Layout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("AppointmentTime")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.bookSession, styles.availableClr, styles.pmTypo]}>
          BOOK SESSION
        </Text>
      </TouchableOpacity>
      <Text style={[styles.more, styles.moreTypo, styles.hrFlexBox]}>
        More...
      </Text>
      <View
        style={[styles.groupView, styles.groupLayout, styles.groupPosition]}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.johnTypo}>{`Dr John Doe is a reputable therapist
She helped me so much.`}</Text>
        <Text
          style={[
            styles.jessiccaJones,
            styles.groupItemPosition,
            styles.availableFlexBox,
            styles.pmTypo,
          ]}
        >
          Peter Drum
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-14.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookingChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  pmTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  iconLayout: {
    width: 20,
    height: 20,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  hrFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  hrTypo: {
    fontFamily: FontFamily.openSansRegular,
    color: Color.black,
    fontSize: 13,
  },
  hrTypo1: {
    left: 147,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
  },
  availableFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  availableLayout: {
    width: 80,
    left: 34,
    top: 206,
    height: 21,
  },
  availableClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  moreTypo: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
  },
  aboutTypo: {
    left: 2,
    fontSize: 14,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 376,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 122,
    width: 140,
    position: "absolute",
  },
  groupPosition: {
    top: 499,
    width: 140,
  },
  johnTypo: {
    height: 41,
    width: 110,
    fontSize: 10,
    top: 41,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.black,
  },
  groupItemPosition: {
    left: 8,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 54,
    width: 315,
    position: "absolute",
  },
  bookingChild: {
    height: 200,
    top: 0,
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
    textAlign: "left",
    color: Color.black,
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
  addictionTherapistPhd: {
    top: 164,
  },
  aMastersDegree: {
    top: 287,
    width: 249,
    left: 30,
    textAlign: "left",
    position: "absolute",
  },
  hr: {
    top: 184,
  },
  rating455: {
    top: 204,
  },
  langatanairobi: {
    top: 224,
  },
  bookingItem: {
    borderRadius: 5,
    backgroundColor: Color.orange,
    height: 21,
    position: "absolute",
  },
  available: {
    justifyContent: "center",
    fontSize: 15,
    height: 21,
  },
  johnDoe: {
    left: 119,
    fontSize: 15,
    color: Color.black,
    top: 0,
  },
  about: {
    top: 124,
    fontSize: 14,
  },
  checkCertifications: {
    top: 245,
    fontSize: 14,
  },
  reviews: {
    top: 305,
    fontSize: 14,
    color: Color.black,
    left: 0,
  },
  image8Icon: {
    top: 1,
    left: 194,
    width: 19,
    height: 19,
    position: "absolute",
  },
  johnDoeParent: {
    top: 142,
    left: 28,
    width: 213,
    height: 324,
    position: "absolute",
  },
  bookingInner: {
    top: 371,
  },
  lineView: {
    top: 422,
  },
  arrowIcon: {
    top: 390,
    left: 192,
    width: 26,
    height: 15,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: Color.whitesmoke,
    borderColor: "#000",
    borderWidth: 1,
    width: 140,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  drJohnDoe: {
    left: 6,
    position: "absolute",
  },
  jessiccaJones: {
    top: 15,
    color: Color.darkslategray,
    width: 97,
    height: 14,
    fontSize: 14,
    textAlign: "left",
  },
  groupItem: {
    top: 93,
    width: 108,
    height: 21,
  },
  rectangleParent: {
    left: 30,
  },
  rectangleGroup: {
    left: 184,
  },
  groupChild2: {
    borderRadius: 15,
    backgroundColor: Color.darkslategray,
    left: 0,
    top: 0,
  },
  bookSession: {
    top: 16,
    left: 97,
    fontSize: 16,
  },
  rectangleContainer: {
    top: 654,
    left: 30,
  },
  more: {
    top: 339,
    left: 302,
    color: Color.orange,
    fontSize: 13,
  },
  groupView: {
    left: 338,
  },
  booking: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Booking;
