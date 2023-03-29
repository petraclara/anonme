import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
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
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={[styles.profileItem, styles.profileLayout]} />
      <Image
        style={styles.homeIndicatorIcon}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      />
      <Image
        style={[styles.menuIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      
      <Text
        style={[styles.thereIsAlways, styles.tue4thFlexBox, styles.tue4thTypo]}
      >
        There is always room to be a better person.
      </Text>
      <Text style={[styles.bookedSessions, styles.communitiesTypo]}>
        Booked sessions
      </Text>
      <Text style={[styles.communities, styles.communitiesTypo]}>
        Communities
      </Text>
      <Image
        style={styles.profileInner}
        resizeMode="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Text
        style={[styles.tue4thJuly, styles.tue4thFlexBox, styles.tue4thTypo]}
      >
        Tue 4th July, 2022
      </Text>
      <Text
        style={[styles.tue4thJuly1, styles.tue4thFlexBox, styles.tue4thTypo]}
      >
        Tue 4th July, 2022
      </Text>
      <Text style={[styles.am9, styles.am9Typo]}>8am - 9 am</Text>
      <Text style={[styles.am91, styles.am9Typo]}>8am - 9 am</Text>
      <Text
        style={[styles.profile1, styles.profile1Typo, styles.profile1Typo1]}
      >
        Profile
      </Text>
      <Text
        style={[styles.kimBella, styles.profile1Typo1, styles.tue4thFlexBox]}
      >
        Kim Bella
      </Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-121.png")}
      />
      <Text style={[styles.drJohnDoe, styles.johnTypo]}>Dr John Doe</Text>
      <Text style={[styles.drJohnDoe1, styles.johnTypo]}>Dr John Doe</Text>
      <Image
        style={[styles.image8Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image9Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.editIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/edit.png")}
      />
      <Image
        style={[styles.checkDoubleIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/checkdouble.png")}
      />
      <Text style={[styles.viewMore, styles.profile1Typo]}>View more...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 96,
    width: 278,
    backgroundColor: Color.gainsboro_100,
    left: 31,
    position: "absolute",
  },
  iconLayout2: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    width: 20,
    top: 0,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  tue4thFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  tue4thTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    textAlign: "center",
    color: Color.black,
  },
  communitiesTypo: {
    left: 30,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    color: Color.black,
    position: "absolute",
  },
  am9Typo: {
    left: 42,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    color: Color.black,
    position: "absolute",
  },
  profile1Typo: {
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  profile1Typo1: {
    fontSize: 18,
    color: Color.black,
  },
  johnTypo: {
    fontSize: 15,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 19,
    width: 19,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 26,
    width: 40,
    height: 40,
    top: 69,
    position: "absolute",
  },
  profileChild: {
    top: 381,
  },
  profileItem: {
    top: 508,
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
    left: 321,
    top: 69,
  },
  pm: {
    top: 2,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
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
  thereIsAlways: {
    top: 272,
    left: 66,
  },
  bookedSessions: {
    top: 344,
  },
  communities: {
    top: 645,
  },
  profileInner: {
    top: 646,
    left: 164,
    width: 17,
    height: 15,
    position: "absolute",
  },
  arrowIcon: {
    left: 165,
    width: 15,
    height: 17,
    top: 344,
    position: "absolute",
  },
  tue4thJuly: {
    top: 414,
    left: 40,
  },
  tue4thJuly1: {
    top: 541,
    left: 40,
  },
  am9: {
    top: 434,
  },
  am91: {
    top: 561,
  },
  profile1: {
    top: 72,
    left: 151,
  },
  kimBella: {
    top: 240,
    left: 145,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: 18,
  },
  rectangleIcon: {
    top: 636,
    height: 1,
    width: 375,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 148,
    left: 148,
    width: 80,
    height: 80,
    position: "absolute",
  },
  drJohnDoe: {
    top: 390,
    left: 41,
  },
  drJohnDoe1: {
    top: 517,
    left: 40,
  },
  image8Icon: {
    top: 391,
    left: 138,
  },
  image9Icon: {
    top: 518,
    left: 139,
  },
  editIcon: {
    top: 422,
    left: 241,
  },
  checkDoubleIcon: {
    top: 549,
    left: 250,
  },
  viewMore: {
    top: 611,
    left: 267,
    color: Color.darkslategray,
    fontSize: 13,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
  },
  profile: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
