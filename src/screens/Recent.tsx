import React, { useState } from "react";
import {
    Button,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    Image,
    Dimensions,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { IStackScreenProps } from "../library/IStackScreenProps";
import { IQRCodePayload } from "../library/IQRCodePayload";
import { TextDivider } from "../components/TextDivider";
import { QRcard } from "../components/QRcard";
import COLORS from "../const/colors";
import { CardSlider } from "../components/cards/CardSlider";
import { LoyaltySlider } from "../components/loyaltyCard/LoyaltySlider";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
const marketlane = require("../mock/images/marketlane.jpeg");
const omarcoffee = require("../mock/images/omarcoffee.jpeg");
const neverregular = require("../mock/images/neverregular.jpeg");
const omarlogo = require("../mock/images/omarLogo.jpeg");

const windowHeight = Dimensions.get("window").height;

const Recent: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;
    const payload: IQRCodePayload = {
        name: "MADDIE IS A LOOSER",
        number: "6969696969",
    };

    const cardsData = [
        {
            id: 1,
            name: "Omar Coffee Bird",
            address: "Otira Road",
            contact: "0420000000",
            display: omarcoffee,
            tags: ["Coffee", "Brunch", "Vibes"],
            distance: "3km",
            open: true,
            openTime: "9am",
            closeTime: "5pm",
        },
        {
            id: 2,
            name: "Never Regular",
            address: "Otira Road",
            contact: "0420000000",
            display: neverregular,
            tags: ["Garden", "Breakfast", "Music"],
            distance: "5km",
            open: true,
            openTime: "9am",
            closeTime: "2pm",
        },
        {
            id: 3,
            name: "Market Lane",
            address: "Otira Road",
            contact: "0420000000",
            display: marketlane,
            tags: ["Coffee", "Take-Away"],
            distance: "10km",
            open: false,
            openTime: "9am",
            closeTime: "5pm",
        },
    ];
    const loyaltyData = [
        {
            id: 1,
            name: "Omar Coffee Bird",
            logo: omarlogo,
            pointMax: 5,
            pointCurrent: 2,
        },
    ];

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <LinearGradient
                colors={[COLORS.gradientA, COLORS.gradientB]}
                style={{
                    height: 1000,
                    position: "absolute",
                    top: -1000,
                    left: 0,
                    right: 0,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />

            <StatusBar backgroundColor="white" />
            <View style={{ height: "5%", width: "100%" }}>
                <LinearGradient
                    colors={[COLORS.gradientA, COLORS.gradientB]}
                    style={{ flex: 1 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
            </View>
            <QRcard name="Marshal Welgama">
                <QRCode
                    color={COLORS.dark}
                    value={JSON.stringify("payload")}
                    size={150}
                />
            </QRcard>

            <TextDivider
                input="Recent Loyalty Cards"
                lineColour={COLORS.lightest}
            ></TextDivider>
            {cardsData.length ? (
                <>
                    <CardSlider data={cardsData} />
                </>
            ) : (
                <View style={{ padding: 20 }}>
                    <Text style={{ color: COLORS.dark }}>No places near you... </Text>
                </View>
            )}

            <TextDivider input="Loyalty" lineColour={COLORS.lightest}></TextDivider>

            <LoyaltySlider data={loyaltyData} />

            <View style={{ marginBottom: 100 }} />
        </ScrollView>
    );
};

export default Recent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: "center",
        paddingBottom: 20,
    },
});
