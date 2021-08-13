import React from "react"
import { Text, View, Alert } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useAuth } from "../../hooks/auth"
import { Avatar } from "../Avatar"
import { styles } from "./styles"

type ProfileProps = {

}

export function Profile({ }: ProfileProps) {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        Alert.alert("Logout", "Deseja sair do Gameplay?",
            [
                {
                    text: "Não",
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => signOut()
                }
            ]
        )
    }

    return (
        <View style={styles.container}>

            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é uma vitoria
                </Text>
            </View>
        </View>
    )
}