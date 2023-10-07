import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import Icon from "react-native-vector-icons/Feather";
import {
    Text,
    StyleSheet,
    Button,
    View,
    Dimensions,
    StatusBar,
    TouchableOpacity,
} from "react-native";

import { IStackScreenProps } from "../library/IStackScreenProps";
import { IQRCodePayload } from "../library/IQRCodePayload";

import { withSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

const ScanScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [loading, setLoading] = useState(true);
    const [scanData, setScanData] = useState<IQRCodePayload>();
    const [permission, setPermission] = useState(true);
    const { navigation } = props;
    useFocusEffect(() => {
        // This will run when component is `focused` or mounted.
        StatusBar.setHidden(true);

        // This will run when component is `blured` or unmounted.
        return () => {
            StatusBar.setHidden(false);
        };
    });

    useEffect(() => {
        requestCameraPermission();

    }, []);

    const requestCameraPermission = async () => {
        try {
            const { status, granted } =
                await BarCodeScanner.requestPermissionsAsync();
            console.log(`Status: ${status}, Granted: ${granted}`);

            if (status === "granted") {
                console.log("Access granted");
                setPermission(true);
            } else {
                setPermission(false);
            }
        } catch (error) {
            console.error(error);
            setPermission(false);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Text>Requesting permission ...</Text>;

    if (scanData) {
        return (
            <React.Fragment>
                <Text style={styles.text}>Name: {scanData.name}</Text>
                <Text style={styles.text}>Number: {scanData.number}</Text>
                <Button title="Scan Again" onPress={() => setScanData(undefined)}>
                    Scan Again
                </Button>
            </React.Fragment>
        );
    }

    if (permission) {
        return (
            <>

                <BarCodeScanner
                    style={[styles.container]}
                    onBarCodeScanned={({ type, data }) => {
                        try {
                            console.log(type);
                            console.log(data);
                            let _data = JSON.parse(data);
                            setScanData(_data);
                        } catch (error) {
                            console.error("Unable to parse string: ", error);
                        }
                    }}
                >
                    <View style={styles.buttonGroupExit}>
                        <TouchableOpacity style={styles.exit} onPress={navigation.goBack}>
                            <Icon name={"x"} size={30} color="#404040" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonGroupTorch}>
                        <TouchableOpacity style={styles.exit} onPress={() => { console.log("when ejected from expo use react native torch") }}>
                            <Icon name={"sun"} size={30} color="#404040" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topright}></View>
                    <View style={styles.topleft}></View>
                    <View style={styles.bottomright}></View>
                    <View style={styles.bottomleft}></View>
                    <View style={styles.bottombox}>
                        <Text style={styles.infotext}>
                            Bring QR into the box and hold steady.
                        </Text>
                    </View>
                </BarCodeScanner>
            </>
        );
    } else {
        return <Text style={styles.textError}>Permission rejected.</Text>;
    }
};

export default ScanScreen;

var { height, width } = Dimensions.get("window");
const top = width / Math.sqrt(8) - height;
const left = -(width / Math.sqrt(8) - height / 2);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginTop: 15,
        backgroundColor: "white",
    },
    infotext: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,

        color: "#404040",
        marginTop: 30,
    },
    textError: {
        color: "red",
    },
    topright: {
        height: 30,
        width: 30,
        borderRightWidth: 5,
        borderTopWidth: 5,
        right: width * 0.25,
        top: height * 0.33,
        borderColor: "white",
        position: "absolute",
        alignItems: "center",
        zIndex: 99,
    },
    topleft: {
        height: 30,
        width: 30,
        borderLeftWidth: 5,
        borderTopWidth: 5,
        left: width * 0.25,
        top: height * 0.33,
        borderColor: "white",
        position: "absolute",
        alignItems: "center",
        zIndex: 99,
    },
    bottomleft: {
        height: 30,
        width: 30,
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        left: width * 0.25,
        bottom: height * 0.33,
        borderColor: "white",
        position: "absolute",
        alignItems: "center",
        zIndex: 99,
    },
    bottomright: {
        height: 30,
        width: 30,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        right: width * 0.25,
        bottom: height * 0.33,
        borderColor: "white",
        position: "absolute",
        alignItems: "center",
        zIndex: 99,
    },
    bottombox: {
        position: "absolute",
        height: height,
        left: 0,
        top: height - 230,
        width: width,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#f5f5f5",
    },
    exit: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: "#f5f5f5",
        borderRadius: 50,
    },
    buttonGroupExit: {
        position: "absolute",
        top: height * 0.05,
        left: width * 0.1,
    },
    buttonGroupTorch: {
        position: "absolute",
        top: height * 0.05,
        right: width * 0.1,
    },
});
