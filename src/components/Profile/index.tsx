import React from "react"
import { Text, View } from "react-native"
import { useAuth } from "../../hooks/auth"
import { Avatar } from "../Avatar"
import { styles } from "./styles"

type ProfileProps = {

}

export function Profile({ }: ProfileProps) {
    const {user} = useAuth();

    return (
        <View style={styles.container}>

            <Avatar urlImage={user.avatar}/>

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