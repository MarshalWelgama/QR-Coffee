import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { IStackScreenProps } from '../library/IStackScreenProps';
import { IQRCodePayload } from '../library/IQRCodePayload';

const QRCodeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;
    const payload: IQRCodePayload = { name: 'MADDIE IS A LOOSER', number: '6969696969' };

    return (
        <View style={styles.container}>
            <QRCode value={JSON.stringify(payload)} />
            <View style={styles.button}>
                <Button title="Go to Scanners" onPress={() => navigation.navigate('Scan')} />
            </View>
        </View>
    );
};

export default QRCodeScreen;

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
