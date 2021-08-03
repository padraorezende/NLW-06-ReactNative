import React from "react"
import { ImageBackground, View, Text, FlatList } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { Background } from "../../components/Background"
import { Header } from "../../components/Header"
import { styles } from "./styles"
import { Fontisto } from "@expo/vector-icons"
import { theme } from "../../global/styles/theme"
import BannerImg from "../../assets/banner.png"
import { ListHeader } from "../../components/ListHeader"
import { Member } from "../../components/Member"
import { ListDivider } from "../../components/ListDivider"
import { ButtonIcon } from "../../components/ButtonIcon"


export function AppointmentDetails() {
    const members = [
        {
            id: "1",
            username: "Lucas",
            avatar_url: "https://github.com/padraorezende.png",
            status: "online"
        },
        {
            id: "2",
            username: "Lucas",
            avatar_url: "https://github.com/padraorezende.png",
            status: "ofline"
        },
        {
            id: "3",
            username: "Lucas",
            avatar_url: "https://github.com/padraorezende.png",
            status: "online"
        },
    ]


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

            <ListHeader title="Jogadores" subtitle="Total 3" />

            <FlatList data={members} keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )} ItemSeparatorComponent={() => <ListDivider />} style={styles.members} />

            <View style={styles.footer}>
                <ButtonIcon titlle="Entrar na partida" />
            </View>

        </Background>
    )
}