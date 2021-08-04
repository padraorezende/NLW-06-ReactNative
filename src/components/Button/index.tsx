import React from "react";
import {RectButton, RectButtonProps} from "react-native-gesture-handler"
import { Text } from "react-native"
import { styles } from "./styles";

type ButtonIconProps= RectButtonProps & {
    titlle:string;
}

export function Button({titlle, ...rest}: ButtonIconProps) {
    return (
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.title}>
                {titlle}
            </Text>
        </RectButton>
    )
}