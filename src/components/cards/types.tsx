import { ImageSourcePropType } from "react-native"

export interface CardProps {
    id: number,
    name: string
    address: string
    contact: string
    display: ImageSourcePropType,
    distance: string
    open: boolean,
    openTime: string,
    closeTime: string,
    tags?: Array<string>,


}

export interface LoyaltyProps {
    id: number,
    name: string
    logo: ImageSourcePropType,
    pointMax: number,
    pointCurrent: number,
}

export interface CardSliderProps {
    data: Array<CardProps>
}

export interface LoyaltySliderProps {
    data: Array<LoyaltyProps>
}