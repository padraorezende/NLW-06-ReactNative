import React from "react"
import { ImageBackground, View, Text } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { Background } from "../../components/Background"
import { Header } from "../../components/Header"
import { styles } from "./styles"
import { Fontisto } from "@expo/vector-icons"
import { theme } from "../../global/styles/theme"
import BannerImg from "../../assets/banner.png"
import { ListHeader } from "../../components/ListHeader"


export function AppointmentDetails() {
    return (
        <Background>
            <Header title="Detalhes" action={
                <BorderlessButton>
                    <Fontisto name="share" size={24} color={theme.colors.primary} />
                </BorderlessButton>
            } />

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendarios
                    </Text>
                    <Text style={styles.subtitle}>
                        E hoje que vamos chegar ao challenge sem perder uma partida da md10
                    </Text>
                </View>

            </ImageBackground>


            <ListHeader title="Jogadores" subtitle="Total 3"/>

        </Background>
    )
}