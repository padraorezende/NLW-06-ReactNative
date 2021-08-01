import React from "react"
import { Text, View } from "react-native"
import { Avatar } from "../Avatar"
import { styles } from "./styles"

type ProfileProps = {

}

export function Profile({ }: ProfileProps) {
    return (
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/padraorezende.png"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>

                    <Text style={styles.username}>
                        Lucas
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é uma vitoria
                </Text>
            </View>
        </View>
    )
}