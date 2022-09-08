import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import COLORS from "../const/colors";

interface data {
    input: string
    lineColour: string
}

export const TextDivider: React.FC<data & any> = ({
    input,
    lineColour,
    ...props
}) => {
    return (
        // <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        //     <View>
        //         <Text style={{ paddingLeft: 20, width: 80, textAlign: 'left' }} {...props}>{input}</Text>
        //     </View>
        //     <View style={{ flex: 1, height: 1, backgroundColor: `${lineColour}` }} />
        // </View>

        <View style={{ flexDirection: 'row', paddingBottom: 15, paddingTop: 5 }}>
            <Text style={{ alignSelf: "auto", paddingHorizontal: 16, fontSize: 22, fontWeight: 'bold', color: COLORS.dark }}>{input}</Text>
            <View style={{ backgroundColor: `${lineColour}`, marginTop: 2, height: 1, flex: 1, alignSelf: 'center' }} />
        </View>
    )
}