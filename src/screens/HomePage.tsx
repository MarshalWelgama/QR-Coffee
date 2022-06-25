import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { IStackScreenProps } from '../library/IStackScreenProps';

const HomePage: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title="Go to Scanner" onPress={() => navigation.navigate('Scan')} />
            </View>
        </View>
    );
};

export default HomePage;

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
