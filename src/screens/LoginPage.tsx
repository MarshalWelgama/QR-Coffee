import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { IStackScreenProps } from '../library/IStackScreenProps';
import {MyReactNativeForm} from '/Users/marshalwelgama/Documents/Projects/QR-Loyalty/qr-loyalty/components/loginForm'

const LoginPage: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;

    const navigateToQR = () => {
        navigation.navigate("QRCode")
    }
    return (
        <View style={styles.container}>
            {/* formik login page */}
            <MyReactNativeForm />
            <View style={styles.button}>
            <Button title="Press to naviagate" onPress={navigateToQR} />
            </View>
        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 10
    }
});
