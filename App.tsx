import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './routes/HomeStack';


const Application = () => {
    return (
        
       <HomeStack/>
    );
};

export default Application;
