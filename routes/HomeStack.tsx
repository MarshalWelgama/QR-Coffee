import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { StatusBar } from "expo-status-bar";

import {StatusBar } from "react-native";

import QRCodeScreen from "../src/screens/QRCode";
import ScanScreen from "../src/screens/Scan";
import HomePage from "../src/screens/HomePage";
import LoginPage from "../src/screens/LoginPage";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name={"Login"} component={LoginPage} />
        <Stack.Screen name={"QRCode"} component={QRCodeScreen} />
       <Stack.Screen name={"Scan"} options={{headerShown: false}} component={ScanScreen} />
      </Stack.Navigator>
      <StatusBar barStyle={"dark-content"} />
    </NavigationContainer>
  );
};

export default HomeStack;
