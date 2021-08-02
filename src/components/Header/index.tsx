import { LinearGradient } from "expo-linear-gradient"
import React, { ReactNode } from "react"
import { View, Text } from "react-native"
import { Background } from "../../components/Background"
import { theme } from "../../global/styles/theme"
import { styles } from "./styles"
import { BorderlessButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

type HeaderProps = {
    title: string,
    action?: ReactNode;
}

export function Header({ title, action }: HeaderProps) {
    const { secondary40, secondary100, heading } = theme.colors

    const navigate = useNavigation();

    function handleGoBack(){
        navigate.goBack();
    }

    return (
        <LinearGradient colors={[secondary100, secondary40]} style={styles.container}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={24} color={heading} />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action &&
                <View>
                    {action}
                </View>
            }

        </LinearGradient>
    )
}