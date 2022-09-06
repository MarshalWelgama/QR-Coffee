import React, { FunctionComponent } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import styled from "styled-components/native"
import COLORS from "../../const/colors";
const { width, height } = Dimensions.get('screen');
const cardWidth = width / 1.5;
const cardHeight = height / 4 - 20;

// const CardBackground = styled.ImageBackground`
//     height: 75%;
//     wid
// `
//types

const CardTouchable = styled.TouchableHighlight`
    height: 100%
    border-radius: 25px;
`

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px
    flex: 1;
`
const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%
`;

import { CardProps } from "./types";

export const CardItem: FunctionComponent<CardProps> = (props) => {
    const handlePress = () => {
        console.log("Hi")
    }
    return (
        <View style={styles.card}>
            <CardTouchable underlayColor={COLORS.lightest} onPress={() => handlePress}>
                <TouchableView>

                    <Text>{props.id}</Text>

                    <Text>{props.name}</Text>

                </TouchableView>
            </CardTouchable>
        </View>

    )

}

const styles = StyleSheet.create({
    card: {
        height: cardHeight,
        width: cardWidth,
        marginHorizontal: 10,
        borderRadius: 15,
        elevation: 13,
        shadowOffset: {
            width: 0,
            height: 5, // for iOS
        },
        shadowRadius: 5,
        shadowOpacity: 0.1,
        backgroundColor: COLORS.white,
    },
})

