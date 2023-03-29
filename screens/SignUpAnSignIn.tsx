import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const SignUpAnSignIn = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.signUpAnSignIn}>
      <View style={styles.anonmeParent}>
        <Text style={styles.anonme}>ANONME</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
      </View>
      <RNPTextInput
        style={[styles.input, styles.inputLayout]}
        placeholder="Name"
        mode="outlined"
        placeholderTextColor="rgba(38, 100, 111, 0.72)"
        activeOutlineColor="#7f7f7f"
        theme={{ colors: { text: "rgba(38, 100, 111, 0.72)" } }}
      />
      <RNPTextInput
        style={[styles.input1, styles.inputLayout]}
        placeholder="Email Address"
        mode="outlined"
        placeholderTextColor="rgba(38, 100, 111, 0.72)"
        activeOutlineColor="#7f7f7f"
        theme={{ colors: { text: "rgba(38, 100, 111, 0.72)" } }}
      />
      <RNPTextInput
        style={[styles.input2, styles.inputLayout]}
        placeholder="Password"
        mode="outlined"
        placeholderTextColor="rgba(38, 100, 111, 0.72)"
        activeOutlineColor="#7f7f7f"
        theme={{ colors: { text: "rgba(38, 100, 111, 0.72)" } }}
      />
      <RNPTextInput
        style={[styles.input3, styles.inputLayout]}
        placeholder="Confirm password"
        mode="outlined"
        placeholderTextColor="rgba(38, 100, 111, 0.72)"
        activeOutlineColor="#7f7f7f"
        theme={{ colors: { text: "rgba(38, 100, 111, 0.72)" } }}
      />
      <Pressable
        style={styles.signIn}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "false" })
        }
      >
        <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign in</Text>
      </Pressable>
      <TouchableOpacity
        style={[styles.button, styles.buttonFlexBox]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "false" })
        }
      >
        <Text style={styles.createAccount}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.signUpAnSignInInner}>
        <View style={[styles.fingerprintParent, styles.buttonFlexBox]}>
          <Image
            style={styles.fingerprintIcon}
            resizeMode="cover"
            source={require("../assets/fingerprint.png")}
          />
          <Text
            style={[styles.useFingerprint, styles.ml10, styles.signIn1Typo]}
          >
            Use fingerprint
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  inputLayout: {
    height: 54,
    width: 315,
    position: "absolute",
  },
  signIn1Typo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: 16,
    textAlign: "center",
  },
  buttonFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  anonme: {
    top: 12,
    fontSize: 34,
    color: Color.darkslategray,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 1,
    left: 90,
    width: 36,
    height: 23,
    position: "absolute",
  },
  anonmeParent: {
    top: 119,
    left: 109,
    width: 157,
    height: 58,
    position: "absolute",
  },
  input: {
    top: 225,
    left: 30,
  },
  input1: {
    top: 311,
    left: 28,
  },
  input2: {
    top: 397,
    left: 26,
  },
  input3: {
    top: 483,
    left: 24,
  },
  signIn1: {
    textDecorationLine: "underline",
    color: Color.orange,
  },
  signIn: {
    left: 156,
    top: 719,
    position: "absolute",
  },
  createAccount: {
    color: Color.white,
    fontSize: 16,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  button: {
    top: 569,
    borderRadius: 15,
    backgroundColor: Color.darkslategray,
    paddingHorizontal: 95,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:15,
    width:"90%"
  },
  fingerprintIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  useFingerprint: {
    color: "rgba(0, 0, 0, 0.9)",
  },
  fingerprintParent: {
    top: 0,
    alignItems: "flex-end",
    left: 0,
    flexDirection: "row",
  },
  signUpAnSignInInner: {
    top: 655,
    left: 114,
    width: 147,
    height: 25,
    position: "absolute",
  },
  signUpAnSignIn: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUpAnSignIn;
