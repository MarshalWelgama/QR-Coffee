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

const QRCodeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;
    const payload: IQRCodePayload = {
        name: "MADDIE IS A LOOSER",
        number: "6969696969",
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <QRcard name="Marshal Welgama"><QRCode color={COLORS.dark} value={JSON.stringify("payload")} size={150} /></QRcard>
            <View style={{ padding: 20 }}></View>
            <TextDivider input="Explore" lineColour={COLORS.lightest}></TextDivider>
            <View style={{ padding: 20 }}>
                <Text style={{ color: COLORS.dark }}>No places near you... </Text>
            </View>
            <TextDivider input="Loyalty" lineColour={COLORS.lightest}></TextDivider>
            <View style={{ padding: 20 }}>
                <Text style={{ color: COLORS.dark }}>
                    Scan your first card, to view your loyalty{" "}
                </Text>
            </View>

            {/*     <Button 
                 title="Go to Scanners"
                 onPress={() => navigation.navigate("Scan")} />*/}
        </ScrollView>
    );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
});
