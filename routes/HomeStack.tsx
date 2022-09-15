import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { StatusBar } from "expo-status-bar";

import { StatusBar, TouchableOpacity } from "react-native";

import QRCodeScreen from "../src/screens/QRCode";
import ScanScreen from "../src/screens/Scan";
import HomePage from "../src/screens/HomePage";
import LoginPage from "../src/screens/LoginPage";
import Icon from "react-native-vector-icons/Feather";
import TopNavigator from "./TopNavigator";
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from "../src/const/colors";

const Stack = createStackNavigator();


const HomeStack = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name={"Login"} component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name={"QRCode"} component={TopNavigator} options={{
          gestureEnabled: false,
          headerBackground: () => (
            <LinearGradient
              colors={[COLORS.gradientA, COLORS.gradientB]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          ),
          title: "Welcome John Smith",
          headerTitleStyle: { color: 'white', },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: 'transparent',
            height: 100,
          },


          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => { console.log("when ejected from expo use react native torch") }}>
              <Icon name={"menu"} size={25} color="#404040" style={{
                color: 'white'
              }} />
            </TouchableOpacity>)

        }} />
        <Stack.Screen name={"Scan"} options={{ headerShown: false }} component={ScanScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default HomeStack;
