import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Messages = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.messages}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Profile" })
      }
    >
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
      <Text style={styles.messages1}>Messages</Text>
      <Image
        style={styles.homeIndicatorIcon}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      />
     
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Pressable
          style={[styles.groupParentLayout, styles.groupPosition]}
          onPress={() => navigation.navigate("Chat")}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupParentLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.unsplashbi91nrppe38Icon}
            resizeMode="cover"
            source={require("../assets/unsplashbi91nrppe381.png")}
          />
          <Text style={[styles.amanGuptaTypo, styles.gelberoTypo]}>
            Aman Gupta
          </Text>
          <Text
            style={[styles.iAmAtClr, styles.amanGuptaTypo]}
          >{`Are you okay? Do you want to talk 
about it?`}</Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/ellipse-9.png")}
          />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupParentLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.unsplashbi91nrppe38Icon}
            resizeMode="cover"
            source={require("../assets/unsplashh5cd51kxmrq.png")}
          />
          <Text style={styles.gelberoTypo}>John Doe</Text>
          <Text style={styles.amanGuptaTypo}>How is your health now?</Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/ellipse-9.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupParentLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.unsplashbi91nrppe38Icon}
            resizeMode="cover"
            source={require("../assets/unsplashsyhuhse5ut8.png")}
          />
          <Text style={styles.gelberoTypo}>Charlie</Text>
          <Text style={styles.amanGuptaTypo}>Okay</Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/ellipse-9.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupParentLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.unsplashbi91nrppe38Icon}
            resizeMode="cover"
            source={require("../assets/unsplashat--ekm5pge.png")}
          />
          <Text style={styles.gelberoTypo}>Smith</Text>
          <Text style={styles.amanGuptaTypo}>I spoke to my therapist</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupParentLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.unsplashbi91nrppe38Icon}
            resizeMode="cover"
            source={require("../assets/unsplashcshhnhc3y8.png")}
          />
          <Text style={styles.gelberoTypo}>Martin</Text>
          <Text style={styles.amanGuptaTypo}>See you soon.</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupParentLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.unsplashbi91nrppe38Icon}
            resizeMode="cover"
            source={require("../assets/unsplash4uks8vyiu9y.png")}
          />
          <Text style={[styles.iAmAtTypo, styles.gelberoTypo]}>Gelbero</Text>
          <Text style={[styles.iAmAtTypo, styles.iAmAtClr]}>
            i am at work will call you @6pm
          </Text>
        </View>
        <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupParentLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.unsplashbi91nrppe38Icon}
            resizeMode="cover"
            source={require("../assets/unsplash4uks8vyiu9y.png")}
          />
          <Text style={styles.gelberoTypo}>Gelbero</Text>
          <Text style={styles.iAmAtClr}>i am at work will call you @6pm</Text>
        </View>
      </View>
    </Pressable>
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
  groupPosition: {
    top: 0,
    height: 74,
  },
  groupParentLayout: {
    height: 74,
    width: 330,
    left: 0,
    position: "absolute",
  },
  gelberoTypo: {
    fontSize: 12,
    top: 19,
    color: Color.black,
  },
  amanGuptaTypo: {
    fontFamily: FontFamily.openSansRegular,
    left: 70,
    textAlign: "left",
    position: "absolute",
  },
  iAmAtClr: {
    color: Color.dimgray,
    fontSize: 11,
    top: 37,
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
  messages1: {
    left: 144,
    fontSize: 18,
    color: Color.darkslategray,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    top: 73,
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
  searchIcon: {
    left: 321,
    width: 24,
    height: 24,
    top: 73,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: -4,
    left: -5,
    borderRadius: 10,
    width: 335,
    height: 571,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    borderRadius: 6,
    shadowColor: "rgba(60, 60, 60, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.white,
  },
  unsplashbi91nrppe38Icon: {
    top: 10,
    left: 7,
    width: 55,
    height: 55,
    position: "absolute",
  },
  groupItem: {
    top: 32,
    left: 304,
    width: 10,
    height: 10,
    position: "absolute",
  },
  rectangleContainer: {
    top: 94,
  },
  groupView: {
    top: 188,
  },
  rectangleParent1: {
    top: 282,
  },
  rectangleParent2: {
    top: 376,
  },
  iAmAtTypo: {
    fontFamily: FontFamily.poppinsRegular,
    left: 70,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent3: {
    top: 462,
  },
  rectangleParent4: {
    top: 548,
  },
  rectangleParent: {
    top: 121,
    left: 23,
    height: 628,
    width: 330,
    position: "absolute",
  },
  messages: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Messages;
