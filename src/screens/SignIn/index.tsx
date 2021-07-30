import React from "react";
import { Text, View, Image, StatusBar } from "react-native"
import { styles } from "./styles";


export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <Image source={ } style={styles.image} resizeMode="stretch"/>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {'\n'}suas jogatinas {'\n'}facilmente
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
                </Text>

            </View>
        </View>
    )
}