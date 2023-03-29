import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View, ScrollView } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { EvilIcons, Ionicons } from "@expo/vector-icons"

const Call = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.call}>
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
      <Text style={styles.history}>History</Text>
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
      
      <RNPTextInput
        style={styles.button}
        placeholder="Search"
        mode="outlined"
        right={<Ionicons name="search" size={24} color="black" />}
        placeholderTextColor="#000"
        activeOutlineColor="#7f7f7f"
        theme={{ colors: { text: "#000", placeholder: "black" } }}
      />

      <ScrollView>
        <View
          style={[
            styles.ellipseContainer,
            styles.groupParentLayout,
            styles.groupParentLayout1,
          ]}
        >
          <Image
            style={[
              styles.groupChild,
              styles.childLayout,
              styles.groupChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-1111.png")}
          />
          <View
            style={[
              styles.nancyDrewGroup,
              styles.nancyGroupLayout,
              styles.nancyPosition,
            ]}
          >
            <Text
              style={[
                styles.nancyDrew2,
                styles.nancyTypo,
                styles.groupChildPosition,
              ]}
            >
              Nancy Drew
            </Text>
            <View style={[styles.nancyGroupLayout, styles.feb2022Position]}>
              <Text
                style={[styles.thFeb20221, styles.febTypo]}
              >{`12th Feb,2022 `}</Text>
              <Image
                style={[
                  styles.arrowIcon,
                  styles.groupPosition,
                  styles.arrowIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/arrow-22.png")}
              />
            </View>
          </View>
          <Text style={[styles.text, styles.nancyTypo]}>8:12</Text>
        </View>
        <View
          style={[
            styles.ellipseParent1,
            styles.groupParentLayout,
            styles.groupParentLayout1,
          ]}
        >
          <Image
            style={[
              styles.groupChild,
              styles.childLayout,
              styles.groupChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-1111.png")}
          />
          <View
            style={[
              styles.nancyDrewGroup,
              styles.nancyGroupLayout,
              styles.nancyPosition,
            ]}
          >
            <Text
              style={[
                styles.nancyDrew2,
                styles.nancyTypo,
                styles.groupChildPosition,
              ]}
            >
              Nancy Drew
            </Text>
            <View style={styles.feb2022Position}>
              <Text
                style={[styles.thFeb20221, styles.febTypo]}
              >{`12th Feb,2022 `}</Text>
              <Image
                style={[styles.groupChild2, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/arrow-23.png")}
              />
            </View>
          </View>
          <Text style={[styles.text, styles.nancyTypo]}>8:12</Text>
        </View>
      </ScrollView>

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
  groupParentLayout: {
    height: 63,
    position: "absolute",
  },
  groupParentLayout1: {
    width: 322,
    height: 63,
    left: 27,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  childLayout: {
    width: 63,
    height: 63,
    position: "absolute",
  },
  nancyTypo: {
    fontSize: 15,
    color: Color.black,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  nancyPosition: {
    left: 70,
    top: 0,
  },
  parentLayout: {
    width: 108,
    position: "absolute",
  },
  febTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.openSansRegular,
    top: 0,
    textAlign: "left",
    fontSize: 13,
    position: "absolute",
  },
  groupPosition: {
    height: 12,
    left: -1,
    position: "absolute",
  },
  arrowIconLayout: {
    width: 13,
    height: 12,
    left: -1,
  },
  nancyGroupLayout: {
    width: 107,
    position: "absolute",
  },
  feb2022Position: {
    height: 18,
    top: 26,
    left: 0,
  },
  callChildBorder: {
    borderColor: "#26646f",
    height: 1,
    width: 316,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 23,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 20,
    top: 69,
    width: 40,
    height: 40,
    position: "absolute",
  },
  history: {
    top: 222,
    fontSize: 18,
    textAlign: "center",
    color: Color.darkslategray,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 30,
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
    top: 77,
    left: 321,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  pm: {
    textAlign: "left",
    color: Color.black,
    fontSize: 13,
    left: 0,
    top: 2,
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
    top: 129,
    width: 345,
    height: 54,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  nancyDrew: {
    textAlign: "left",
  },
  ellipseParent: {
    width: 159,
    top: 0,
  },
  text: {
    top: 14,
    left: 292,
    textAlign: "center",
  },
  groupParent: {
    top: 256,
  },
  callChild: {
    left: 27,
    width: 63,
    top: 256,
  },
  callItem: {
    borderColor: "rgba(0, 0, 0, 0.2)",
    height: 1,
    width: 316,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 23,
    top: 332,
    position: "absolute",
  },
  nancyDrew1: {
    left: 1,
    top: 0,
    textAlign: "center",
  },
  thFeb2022: {
    left: 22,
  },
  groupInner: {
    top: 3,
    width: 13,
  },
  nancyDrewParent: {
    left: 69,
    height: 44,
    top: 0,
  },
  ellipseGroup: {
    top: 358,
  },
  nancyDrew2: {
    top: 0,
    textAlign: "center",
  },
  thFeb20221: {
    left: 21,
  },
  arrowIcon: {
    width: 13,
    top: 2,
  },
  nancyDrewGroup: {
    height: 44,
  },
  ellipseContainer: {
    top: 460,
  },
  groupChild2: {
    width: 12,
    height: 12,
    left: -1,
    top: 3,
  },
  groupView: {
    top: 562,
  },
  ellipseParent1: {
    top: 664,
  },
  callInner: {
    top: 332,
    borderColor: "#26646f",
  },
  lineView: {
    top: 434,
  },
  callChild1: {
    top: 536,
  },
  callChild2: {
    top: 638,
  },
  callChild3: {
    top: 740,
  },
  viewAll: {
    top: 229,
    left: 274,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    fontSize: 13,
    textAlign: "center",
    color: Color.darkslategray,
    position: "absolute",
  },
  nancyDrewParent2: {
    left: 97,
    height: 44,
    top: 256,
  },
  call: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Call;
