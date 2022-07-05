import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { StatusBar } from "expo-status-bar";

import { StatusBar, TouchableOpacity } from "react-native";

import QRCodeScreen from "../src/screens/QRCode";
import ScanScreen from "../src/screens/Scan";
import HomePage from "../src/screens/HomePage";
import LoginPage from "../src/screens/LoginPage";
import Icon from "react-native-vector-icons/Feather";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name={"Login"} component={LoginPage} />
        <Stack.Screen name={"QRCode"} component={QRCodeScreen} options={{
          title: "Welcome John Smith",

          headerStyle: {
            backgroundColor: "white",
            height: 100
          },
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 24 }} onPress={() => { console.log("when ejected from expo use react native torch") }}>
              <Icon name={"menu"} size={30} color="#404040" style={{

              }} />
            </TouchableOpacity>),
          headerLeft: () => (<></>)

        }} />
        <Stack.Screen name={"Scan"} options={{ headerShown: false }} component={ScanScreen} />
      </Stack.Navigator>
      <StatusBar barStyle={"dark-content"} />
    </NavigationContainer>
  );
};

export default HomeStack;
