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
import { RecentCardItem } from "../components/recentCard/RecentCardItem";

const windowHeight = Dimensions.get("window").height;

const Recent: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;
    const payload: IQRCodePayload = {
        name: "MADDIE IS A LOOSER",
        number: "6969696969",
    };

    const cardsData =
    {
        id: 1,
        name: "Market Lane",
        logo: omarlogo,
        pointMax: 5,
        pointCurrent: 2,
        address: "22 Otira Road Knoxfield 3180",
        contact: "04000000000",
        recentTimeStamp: "13948319282",
        visits: 32

    }


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
            />
            <RecentCardItem {...cardsData} />



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
