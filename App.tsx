import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import HomeStack from './routes/HomeStack';


const Application = () => {
    return (
        <>
            <StatusBar barStyle={"dark-content"} />

            <HomeStack />
        </>
    );
};

export default Application;
