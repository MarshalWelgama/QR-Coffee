import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoginPage from "../src/screens/LoginPage";
import Scan from "../src/screens/Scan";
import { StatusBar, SafeAreaView } from "react-native";
import QRCodeScreen from "../src/screens/QRCode";
import COLORS from "../src/const/colors";

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16 },
                tabBarScrollEnabled: false,
                swipeEnabled: false,
                tabBarActiveTintColor: COLORS.dark,
                tabBarIndicatorStyle: {
                    backgroundColor: COLORS.primary,
                    borderTopColor: "white",
                },
                tabBarStyle: {
                    elevation: 0, // for Android
                    shadowOffset: {
                        width: 0,
                        height: 5, // for iOS
                    },
                    shadowRadius: 5,
                    shadowOpacity: 0.05,
                },
            }}
        >
            <Tab.Screen name="Home" component={QRCodeScreen} />
            <Tab.Screen name="Recent" component={QRCodeScreen} />
            <Tab.Screen name="Scan" component={Scan} />
        </Tab.Navigator>
    );
};

export default TopNavigator;
