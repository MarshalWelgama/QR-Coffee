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
import { Card } from "../components/card";

const QRCodeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;
    const payload: IQRCodePayload = {
        name: "MADDIE IS A LOOSER",
        number: "6969696969",
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card
                data={<QRCode value={JSON.stringify("payload")} size={150} />} />
            <View style={{ padding: 20 }}></View>
            <TextDivider input="Explore" lineColour="#e3e3e3"></TextDivider>
            <View style={{ padding: 20 }}>
                <Text style={{ color: "#828282" }}>No places near you... </Text>
            </View>
            <TextDivider input="Loyalty" lineColour="#e3e3e3"></TextDivider>
            <View style={{ padding: 20 }}>
                <Text style={{ color: "#828282" }}>
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
