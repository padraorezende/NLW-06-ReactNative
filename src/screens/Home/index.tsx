import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View, Text } from "react-native"
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

    const navigate = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigate.navigate("AppointmentDetails");
    }
    function handleAppointmentCreate() {
        navigate.navigate("AppointmentCreate");
    }

    const appointments = [
        {
            id: "1",
            guild: {
                id: "1",
                name: "Lendarios",
                icon: null,
                owner: true
            },
            category: "1",
            date: "22/06 as 20:40h",
            description: "E hoje que vamos chegar ao challenge sem perder uma partida da md10"
        },
        {
            id: "2",
            guild: {
                id: "2",
                name: "Lendarios",
                icon: null,
                owner: true
            },
            category: "1",
            date: "22/06 as 20:40h",
            description: "E hoje que vamos chegar ao challenge sem perder uma partida da md10"
        }
    ]



    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>
            <View>
                <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />


                <ListHeader title="Partidas agendadas" subtitle="Total 6" />


                <FlatList data={appointments} keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} onPress={handleAppointmentDetails} />
                    )} ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches} showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 69 }}
                />
            </View>
        </Background>
    )
}