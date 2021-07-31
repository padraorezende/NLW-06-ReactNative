import React from "react";
import { TouchableOpacity, View, Image, Text, TouchableOpacityProps } from "react-native"
import DiscordImg from "../../assets/discord.png"
import { styles } from "./styles";

type ButtonProps= TouchableOpacityProps & {
    titlle:string;
}

export function ButtonIcon({titlle, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}{...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>


            <Text style={styles.title}>
                {titlle}
            </Text>
        </TouchableOpacity>
    )
}