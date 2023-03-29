import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Communities = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.communities}>
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
      <Text style={styles.exploreCommunities}>Explore Communities</Text>
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
      
      <RNPTextInput
        style={styles.button}
        placeholder="Search"
        mode="outlined"
        placeholderTextColor="#fff"
        activeOutlineColor="#7f7f7f"
        theme={{ colors: { text: "#000" } }}
      />
      <View
        style={[
          styles.communitiesChild,
          styles.childLayout,
          styles.childShadowBox,
        ]}
      />
      <Text style={styles.relationshipAdvice}>{`Relationship 
Advice`}</Text>
      <Text style={[styles.communities1, styles.communitiesTypo]}>
        26 Communities
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.childLayout]}
        onPress={() => navigation.navigate("DepressionGroup")}
      >
        <View
          style={[styles.groupChild, styles.childLayout, styles.childShadowBox]}
        />
        <Text
          style={[styles.dealingWithDepression, styles.familyIssuesTypo]}
        >{`Dealing with
Depression And 
Anxiety`}</Text>
        <Pressable
          style={styles.communitiesPosition}
          onPress={() => navigation.navigate("DepressionGroup")}
        >
          <Text style={styles.communitiesTypo}>12 Communities</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View
          style={[styles.groupChild, styles.childLayout, styles.childShadowBox]}
        />
        <Text style={[styles.familyIssues, styles.familyIssuesTypo]}>{`Family
Issues`}</Text>
        <Text style={[styles.communitiesPosition, styles.communitiesTypo]}>
          12 Communities
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View
          style={[styles.groupChild, styles.childLayout, styles.childShadowBox]}
        />
        <Text
          style={[styles.familyIssues, styles.familyIssuesTypo]}
        >{`Coping with
School Stress`}</Text>
        <Text style={styles.communitiesTypo}>22 Communities</Text>
      </View>
      <Image
        style={styles.plusCircleIcon}
        resizeMode="cover"
        source={require("../assets/pluscircle.png")}
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
  childLayout: {
    height: 163,
    width: 148,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.whitesmoke,
    borderRadius: 10,
    width: 148,
  },
  communitiesTypo: {
    textDecorationLine: "underline",
    fontSize: 12,
    textAlign: "left",
    color: Color.darkslategray,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  familyIssuesTypo: {
    left: 10,
    fontSize: 12,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectanglePosition: {
    top: 505,
    height: 163,
    width: 148,
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
  exploreCommunities: {
    top: 269,
    left: 40,
    fontSize: 18,
    textAlign: "center",
    color: Color.darkslategray,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
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
  menuIcon: {
    left: 321,
    width: 24,
    height: 24,
    top: 77,
    position: "absolute",
    overflow: "hidden",
  },
  wrapper: {
    left: 273,
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
    left: 0,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
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
  button: {
    top: 187,
    width: 315,
    height: 54,
    left: 30,
    position: "absolute",
  },
  communitiesChild: {
    left: 197,
    top: 314,
  },
  relationshipAdvice: {
    top: 391,
    fontSize: 12,
    left: 207,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  communities1: {
    top: 443,
    left: 207,
    textDecorationLine: "underline",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.whitesmoke,
    borderRadius: 10,
    left: 0,
  },
  dealingWithDepression: {
    top: 69,
  },
  communitiesPosition: {
    top: 129,
    left: 10,
    position: "absolute",
  },
  rectangleParent: {
    top: 314,
    left: 30,
  },
  familyIssues: {
    top: 77,
  },
  rectangleGroup: {
    left: 30,
  },
  rectangleContainer: {
    left: 197,
  },
  plusCircleIcon: {
    top: 693,
    left: 313,
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  communities: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Communities;
