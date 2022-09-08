import React from "react";
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
const marketlane = require("../mock/images/marketlane.jpeg")
const omarcoffee = require("../mock/images/omarcoffee.jpeg")
const neverregular = require("../mock/images/neverregular.jpeg")

const QRCodeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
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
            tags: ['coffee', 'brunch', 'vibes'],
            distance: '3km',
            open: true,
            openTime: '9am',
            closeTime: '5pm'

        },
        {
            id: 2,
            name: "Never Regular",
            address: "Otira Road",
            contact: "0420000000",
            display: neverregular,
            tags: ['coffee', 'brunch', 'vibes'],
            distance: '5km',
            open: true,
            openTime: '9am',
            closeTime: '2pm'
        },
        {
            id: 3,
            name: "Market Lane",
            address: "Otira Road",
            contact: "0420000000",
            display: marketlane,
            tags: ['coffee', 'brunch', 'vibes'],
            distance: '10km',
            open: false,
            openTime: '9am',
            closeTime: '5pm'
        },
    ];

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            <QRcard name="Marshal Welgama">
                <QRCode
                    color={COLORS.dark}
                    value={JSON.stringify("payload")}
                    size={150}
                />
            </QRcard>

            <TextDivider input="Explore Near You" lineColour={COLORS.lightest}></TextDivider>
            {cardsData.length ?
                <>
                    <CardSlider data={cardsData} />
                </>
                :
                <View style={{ padding: 20 }}>
                    <Text style={{ color: COLORS.dark }}>No places near you... </Text>
                </View>
            }


            <TextDivider input="Loyalty" lineColour={COLORS.lightest} ></TextDivider>

            {/*  <View>
                <Text style={{ color: COLORS.dark }}>
                     Scan your first card, to view your loyalty{" "} 
                </Text>
            </View>

             <Button 
                 title="Go to Scanners"
                 onPress={() => navigation.navigate("Scan")} />*/}
            <CardSlider data={cardsData} />
        </ScrollView>
    );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: "center",
        paddingBottom: 20
    },
});
