import React, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { LoyaltyItem } from "./LoyaltyItem";

const CardList = styled.FlatList`
    width: 100%;
    flex: 1;


`

//types
import { LoyaltySliderProps } from "../cards/types";

export const LoyaltySlider: FunctionComponent<LoyaltySliderProps> = (props) => {
    return (
        <CardList
            data={props.data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 25,
                paddingBottom: 20

            }}
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <LoyaltyItem {...item} />}


        />

    )
}
