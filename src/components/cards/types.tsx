import { ImageSourcePropType } from "react-native"

export interface CardProps {
    id: number,
    name: string
    address: string
    // logo: ImageSourcePropType

}

export interface CardSliderProps {
    data: Array<CardProps>
}