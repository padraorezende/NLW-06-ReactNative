import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View, Text } from "react-native"
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { COLLECTION_APPOINTMENTS } from "../../global/database";
import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

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

    async function loadAppointments() {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    }


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