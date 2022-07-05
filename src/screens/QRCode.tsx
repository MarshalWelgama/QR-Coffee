import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { IStackScreenProps } from "../library/IStackScreenProps";
import { IQRCodePayload } from "../library/IQRCodePayload";
import { Card } from "react-native-shadow-cards";

const QRCodeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;
    const payload: IQRCodePayload = {
        name: "MADDIE IS A LOOSER",
        number: "6969696969",
    };

    return (
        <View style={styles.container}>


            <QRCode value={JSON.stringify(payload)} size={250} />

            <View style={styles.button}>

            </View>


            <Button
                title="Go to Scanners"
                onPress={() => navigation.navigate("Scan")}
            />
        </View>
    );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        alignItems: "center",

    },
    button: {
        marginTop: 10,
    },
});
