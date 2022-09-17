import React, { FunctionComponent, useState } from "react";
import { View, StyleSheet, Dimensions, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import styled from "styled-components/native"
import COLORS from "../../const/colors";
const { width, height } = Dimensions.get('screen');
const cardWidth = width * 0.8; //1.25
const cardHeight = height * 0.36; //2.6
const omarcoffee = require("../../mock/images/placeholderlogo.png");

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
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    width: 100%`;

const CardColumn = styled.View`
    flex-direction: column;
    align-items: flex-end;
    width: 100%`;


import { recentCardProps } from "../cards/types";

export const RecentCardItem: FunctionComponent<recentCardProps> = (props) => {

    const color = '#ecf0f1'
    const items = [
        { name: 'Never Regular', code: color },
        { name: 'Omar Coffee', code: color },
        { name: 'Market Lane', code: color },
        { name: 'Code Five', code: color },
        { name: 'Grinders Trash', code: color },
    ];
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

        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}

            spacing={10}
            renderItem={({ item }) => (
                <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Image source={omarcoffee} style={{ flex: 1, marginBottom: 10, width: 80, alignSelf: 'center' }} />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>Last Visit: {item.code}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        {renderPoints()}
                        {renderRemainder()}
                    </View>
                </TouchableOpacity>
            )}
        />
    )

}

const styles = StyleSheet.create({
    gridView: {
        paddingBottom: 130,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: 'black',
    },
    circleOutline: {
        height: Dimensions.get('window').width * 0.03,
        width: Dimensions.get('window').width * 0.03,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
        backgroundColor: COLORS.almostWhite,
        borderColor: COLORS.gradientA,
        borderWidth: Dimensions.get('window').width * 0.003,
        marginHorizontal: 2
    },
    circle: {
        height: Dimensions.get('window').width * 0.03,
        width: Dimensions.get('window').width * 0.03,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
        backgroundColor: COLORS.gradientB,
        marginHorizontal: 2
    },
});

