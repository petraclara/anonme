import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

type HomescreenType = {
  style?: StyleProp<ViewStyle>;
};

const Homescreen = ({ style }: HomescreenType) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={[styles.homescreen, style]}>
        <Image
          style={styles.homescreenChild}
          resizeMode="cover"
          source={require("../assets/ellipse-110.png")}
        />
        <Image
          style={[styles.homescreenItem, styles.homescreenLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <Image
          style={[styles.homescreenInner, styles.homescreenLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-1111.png")}
        />
        <ScrollView horizontal>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text
            style={[
              styles.talkToProfessional,
              styles.buttonFlexBox,
              styles.connectWithPeopleTypo,
            ]}
          >{`Talk to
professional
therapists
from 
around the
globe!`}</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text
            style={[
              styles.connectWithPeople,
              styles.buttonFlexBox,
              styles.connectWithPeopleTypo,
            ]}
          >{`Connect
with people
like you who
share your 
challenges`}</Text>
        </View>
        </ScrollView>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <TouchableOpacity
          style={[styles.button, styles.buttonFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("AvailableSpeakers")}
        >
          <Text
            style={[
              styles.speaklistenAnonymously,
              styles.professionalsNearYouTypo,
            ]}
          >
            SPEAK/LISTEN ANONYMOUSLY
          </Text>
        </TouchableOpacity>
        <Text
          style={[styles.professionalsNearYou, styles.professionalsNearYouTypo]}
        >
          Professionals Near you
        </Text>
        <Pressable
          style={[styles.nancyDrewParent, styles.nancyLayout]}
          onPress={() => navigation.navigate("ProfessionalNearYou")}
        >
          <Text style={[styles.nancyDrew, styles.pmPosition]}>Nancy Drew</Text>
          <Text style={[styles.addictionTherapistPhd, styles.pmPosition]}>
            Addiction Therapist, PHD
          </Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-142.png")}
          />
        </Pressable>
        <View style={[styles.nancyDrewGroup, styles.nancyLayout]}>
          <Text style={[styles.nancyDrew, styles.pmPosition]}>Nancy Drew</Text>
          <Text style={[styles.addictionTherapistPhd, styles.pmPosition]}>
            Addiction Therapist, PHD
          </Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-143.png")}
          />
        </View>
        <View style={styles.nancyDrewContainer}>
          <Text style={[styles.nancyDrew, styles.pmPosition]}>Nancy Drew</Text>
          <Text style={[styles.addictionTherapistPhd, styles.pmPosition]}>
            Addiction Therapist, PHD
          </Text>
          <Pressable
            style={styles.viewMore}
            onPress={() => navigation.navigate("ProfessionalNearYou")}
          >
            <Text style={styles.viewMore1}>View more...</Text>
          </Pressable>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-142.png")}
          />
        </View>
        <Image
          style={[styles.phoneIcon, styles.iconLayout1, styles.phoneIconPosition]}
          resizeMode="cover"
          source={require("../assets/phone1.png")}
        />
        <Image
          style={[
            styles.phoneIcon1,
            styles.iconLayout1,
            styles.phoneIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/phone1.png")}
        />
        <Image
          style={[
            styles.phoneIcon2,
            styles.iconLayout1,
            styles.phoneIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/phone1.png")}
        />
        <Image
          style={styles.homeIndicatorIcon}
          resizeMode="cover"
          source={require("../assets/home-indicator.png")}
        />
        <Image
          style={[styles.menuIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/menu.png")}
        />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-18.png")}
          />
        </Pressable>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homescreenLayout: {
    height: 63,
    width: 63,
    left: 30,
    position: "absolute",
  },
  rectangleLayout: {
    height: 158,
    width: 183,
    top: 158,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  connectWithPeopleTypo: {
    display: "flex",
    fontSize: 16,
    left: 15,
    top: 10,
    alignItems: "center",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  professionalsNearYouTypo: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  nancyLayout: {
    height: 51,
    width: 152,
    left: 100,
    position: "absolute",
  },
  pmPosition: {
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  phoneIconPosition: {
    left: 322,
    width: 24,
  },
  iconLayout: {
    width: 20,
    height: 20,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homescreenChild: {
    top: 60,
    width: 55,
    height: 55,
    left: 30,
    position: "absolute",
  },
  homescreenItem: {
    top: 512,
  },
  homescreenInner: {
    top: 591,
  },
  ellipseIcon: {
    top: 670,
    height: 63,
    width: 63,
    left: 30,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 16,
    backgroundColor: Color.darkslategray,
    top: 0,
    left: 0,
    height: 158,
    width: 183,
  },
  talkToProfessional: {
    width: 99,
    height: 137,
  },
  rectangleParent: {
    left: 30,
  },
  connectWithPeople: {
    width: 102,
    height: 114,
  },
  rectangleGroup: {
    left: 237,
  },
  groupIcon: {
    top: 356,
    left: 159,
    width: 58,
    height: 7,
    position: "absolute",
  },
  speaklistenAnonymously: {
    textAlign: "center",
    color: Color.white,
    fontSize: 18,
  },
  button: {
    top: 387,
    borderRadius: 4,
    padding: 13,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.darkslategray,
    left: 30,
  },
  professionalsNearYou: {
    top: 471,
    color: Color.darkslategray,
    textAlign: "center",
    left: 30,
    position: "absolute",
  },
  nancyDrew: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    color: Color.black,
    top: 0,
  },
  addictionTherapistPhd: {
    top: 22,
    fontFamily: FontFamily.openSansRegular,
    fontSize: 13,
    textAlign: "center",
  },
  groupInner: {
    top: 41,
    width: 51,
    height: 10,
  },
  nancyDrewParent: {
    top: 512,
  },
  nancyDrewGroup: {
    top: 591,
  },
  viewMore1: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.orange,
    fontSize: 13,
    textAlign: "center",
  },
  viewMore: {
    left: 162,
    top: 51,
    position: "absolute",
  },
  nancyDrewContainer: {
    width: 240,
    height: 69,
    left: 100,
    top: 670,
    position: "absolute",
  },
  phoneIcon: {
    top: 526,
  },
  phoneIcon1: {
    top: 605,
  },
  phoneIcon2: {
    top: 684,
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
    top: 76,
    left: 328,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 280,
    top: 74,
    width: 23,
    height: 27,
    position: "absolute",
  },
  pm: {
    top: 2,
    fontSize: 13,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
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
  homescreen: {
    backgroundColor: Color.white,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Homescreen;
