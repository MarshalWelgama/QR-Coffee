import React, { FunctionComponent } from "react";
import { View, StyleSheet, Dimensions, Text, Image, TouchableHighlight } from "react-native";
import styled from "styled-components/native"
import COLORS from "../../const/colors";
const { width, height } = Dimensions.get('screen');
const cardWidth = width * 0.8; //1.25
const cardHeight = height * 0.3; //2.6

// const CardBackground = styled.ImageBackground`
//     height: 75%;
//     wid
// `
//types

const CardTouchable = styled.View`
    height: 100%
    border-radius: 15px;
`

const TouchableView = styled.View`
    justify-content: space-between;
    flex: 1;
    paddingTop: 5px;
    marginVertical: 10px
    marginHorizontal: 15px
    
`
const CardRow = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%`;


import { LoyaltyProps } from "../cards/types";

export const LoyaltyItem: FunctionComponent<LoyaltyProps> = (props) => {
    const handlePress = () => {
        console.log("Hi")
    }

    const renderPoints = () => {
        return (
            Array(props.pointCurrent).fill(0).map((_, i) => <View style={styles.circle} key={i} />)
        )
    }

    const renderRemainder = () => {
        return (
            Array(props.pointMax - props.pointCurrent).fill(0).map((_, i) => <View style={styles.circleOutline} key={i} />)
        )
    }
    return (
        <View style={styles.card}>
            <CardTouchable>
                <TouchableView>
                    <CardRow>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.dark }}>{props.name}</Text>
                    </CardRow>
                    <Image style={styles.image} source={props.logo} />

                    <CardRow style={styles.points}>

                        {renderPoints()}
                        {renderRemainder()}
                    </CardRow>
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
        // elevation: 5,
        // shadowOffset: {
        //     width: 0,
        //     height: 2, // for iOS
        // },
        // shadowRadius: 2,
        // shadowOpacity: 0.1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.lightest,
        borderWidth: 0.5


    },
    image: {
        height: (height / 4) * 0.9,
        width: (width / 1.25) * 0.9,
        alignSelf: 'center',
    },
    tagContainer: {
        height: 25,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: 'center',

        borderRadius: 5,
        borderColor: COLORS.light,
        borderWidth: 0.5,
        marginBottom: 5,
        marginRight: 5

    },
    ctaContainer: {
        height: 35,
        width: '48%',
        backgroundColor: COLORS.white,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: COLORS.light,
        borderWidth: 0.5,
    },
    circleOutline: {
        height: Dimensions.get('window').width * 0.05,
        width: Dimensions.get('window').width * 0.05,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
        backgroundColor: COLORS.almostWhite,
        borderColor: COLORS.primary,
        borderWidth: Dimensions.get('window').width * 0.003,
        marginHorizontal: 2
    },
    circle: {
        height: Dimensions.get('window').width * 0.05,
        width: Dimensions.get('window').width * 0.05,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
        backgroundColor: COLORS.primary,
        marginHorizontal: 2
    },
    points: {
        justifyContent: 'center'
    }
})

