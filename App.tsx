const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboard1 from "./screens/Onboard1";
import Chat from "./screens/Chat";
import Messages from "./screens/Messages";
import ConfirmPayment from "./screens/ConfirmPayment";
import Payment from "./screens/Payment";
import StartCall from "./screens/StartCall";
import AvailableSpeakers from "./screens/AvailableSpeakers";
import AppointmentTime from "./screens/AppointmentTime";
import Booking from "./screens/Booking";
import Profile from "./screens/Profile";
import CallInfo from "./screens/CallInfo";
import ProfessionalNearYou from "./screens/ProfessionalNearYou";
import Notifications from "./screens/Notifications";
import DepressionGroup from "./screens/DepressionGroup";
import Call from "./screens/Call";
import Communities from "./screens/Communities";
import SignUpAnSignIn from "./screens/SignUpAnSignIn";
import Onboard3 from "./screens/Onboard3";
import Onboard2 from "./screens/Onboard2";
import PhoneIcon from "./components/PhoneIcon";
import HomeIcon from "./components/HomeIcon";
import UsersIcon from "./components/UsersIcon";
import Users from "./components/Users";
import UserIcon from "./components/UserIcon";
import User1 from "./components/User1";
import MessageSquareIcon from "./components/MessageSquareIcon";
import MessageSquare from "./components/MessageSquare";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./components/Homescreen";
import { Ionicons,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <Ionicons name="home-outline" size={27} color="darkgreen" />,
    <PhoneIcon />,
    <Users />,
    <MessageSquare />,
    <User1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <HomeIcon />,
    <FontAwesome name="phone" size={27} color="darkgreen" />,
    <UsersIcon />,
    <MaterialCommunityIcons name="message" size={27} color="darkgreen" />,
    <UserIcon />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <SafeAreaView>
            <View
              style={{
                width: 375,
                height: 64.5,
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 25
              }}
            >
              {bottomTabItemsNormal.map((item: any, index: any) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      navigation.navigate({
                        name: state.routes[index].name,
                        merge: true,
                      });
                    }}
                  >
                    {activeIndex === index
                      ? bottomTabItemsActive[index] || item
                      : item}
                  </Pressable>
                );
              })}
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Tab.Screen
        name="Call"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Open Sans": require("./assets/fonts/Open_Sans.ttf"),
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_semibold": require("./assets/fonts/Open_Sans_semibold.ttf"),
    "Open Sans_bold": require("./assets/fonts/Open_Sans_bold.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_extralight: require("./assets/fonts/Inter_extralight.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator initialRouteName="Onboard1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Onboard1"
              component={Onboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmPayment"
              component={ConfirmPayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartCall"
              component={StartCall}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AvailableSpeakers"
              component={AvailableSpeakers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppointmentTime"
              component={AppointmentTime}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Booking"
              component={Booking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CallInfo"
              component={CallInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfessionalNearYou"
              component={ProfessionalNearYou}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DepressionGroup"
              component={DepressionGroup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpAnSignIn"
              component={SignUpAnSignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboard3"
              component={Onboard3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboard2"
              component={Onboard2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
