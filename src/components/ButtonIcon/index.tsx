import React from "react";
import {RectButton, RectButtonProps} from "react-native-gesture-handler"
import { View, Image, Text } from "react-native"
import DiscordImg from "../../assets/discord.png"
import { styles } from "./styles";

type ButtonIconProps= RectButtonProps & {
    titlle:string;
}

export function ButtonIcon({titlle, ...rest}: ButtonIconProps) {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>


            <Text style={styles.title}>
                {titlle}
            </Text>
        </RectButton>
    )
}