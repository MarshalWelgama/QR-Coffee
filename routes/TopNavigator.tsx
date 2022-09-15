import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoginPage from "../src/screens/LoginPage";
import Scan from "../src/screens/Scan";
import {
    StatusBar,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import QRCodeScreen from "../src/screens/QRCode";
import COLORS from "../src/const/colors";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import Recent from "../src/screens/Recent";

// const Tab = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();

const HomeButton = ({ children, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -5,
            justifyContent: "center",
            alignItems: "center",
            ...style.shadow,
        }}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: COLORS.gradientB,
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);
const TopNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 25,
                    left: 25,
                    right: 25,
                    backgroundColor: "white",
                    borderRadius: 20,
                    height: 80,
                    borderTopWidth: 0,
                    borderColor: COLORS.lightest,
                    ...style.shadow,
                },
            }}
        >
            <Tab.Screen
                name="Recent"
                component={Recent}
                options={{
                    headerTintColor: "black",
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 15,
                            }}
                        >
                            <Icon
                                name={"rotate-ccw"}
                                size={25}
                                style={{
                                    width: 25,
                                    height: 25,
                                    color: focused ? COLORS.gradientB : COLORS.unFocus, // #748c94
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.gradientB : COLORS.unFocus,
                                    fontSize: 12,
                                }}
                            >
                                Recent
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={QRCodeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={"home"}
                            size={30}
                            style={{
                                width: 30,
                                height: 30,
                                color: "white",
                            }}
                        />
                    ),
                    tabBarButton: (props) => <HomeButton {...props} />,
                }}
            />
            <Tab.Screen
                name="Scan"
                component={Scan}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 15,
                            }}
                        >
                            <Icon
                                name={"maximize"}
                                size={25}
                                style={{
                                    width: 25,
                                    height: 25,
                                    color: focused ? COLORS.gradientB : COLORS.unFocus,
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.gradientA : COLORS.unFocus,
                                    fontSize: 12,
                                }}
                            >
                                Scan
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: "black",
        shadowOffset: {
            height: 3,
            width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default TopNavigator;
