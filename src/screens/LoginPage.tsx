import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { IStackScreenProps } from "../library/IStackScreenProps";
import { MyReactNativeForm } from "../components/loginForm";
import COLORS from "../const/colors";

const LoginPage: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;

    const navigateToQR = () => {
        navigation.navigate("QRCode");
    };
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginMain}>Welcome Back!</Text>
                <Text style={styles.loginSubtitle}>Please sign in to your account</Text>
            </View>


            {/* formik login page */}
            <MyReactNativeForm />
            <View style={styles.debug}>
                <Button title="Skip to logged in" onPress={navigateToQR} />
            </View>
        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: "center",
        justifyContent: "center",
        bottom: 40
    },
    loginMain: {
        fontSize: 36,
        alignItems: "center",
        justifyContent: "center",
        color: COLORS.dark,
        marginBottom: 10
    },
    loginSubtitle: {
        fontSize: 14,
        alignItems: "center",
        justifyContent: "center",
        color: COLORS.notdark
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    topContainer: {
        flex: 1,
    },
    debug: {
        top: 60,
    },
});
