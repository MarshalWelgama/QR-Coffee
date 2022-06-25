import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

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
       <Stack.Screen name={"Scan"} component={ScanScreen} />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default HomeStack;
