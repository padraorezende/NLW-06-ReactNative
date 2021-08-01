import React from "react";
import {View} from "react-native"
import { styles } from "./styles";
import {RectButton, RectButtonProps} from "react-native-gesture-handler"
import {SvgProps} from "react-native-svg"
import { theme } from "../../global/styles/theme";
import {LinearGradient} from "expo-linear-gradient"

type CategoryProps = RectButtonProps & {
    title: string,
    icon: React.FC<SvgProps>,
    checked?: boolean
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: CategoryProps){
    const {secondary50, secondary70} = theme.colors

    return (
        

        <RectButton style={styles.container}>
            <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>

            </LinearGradient>

        </RectButton>
    )
}