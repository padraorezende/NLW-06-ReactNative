import React, { useState } from "react"
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Modal } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { Background } from "../../components/Background"
import { Header } from "../../components/Header"
import { styles } from "./styles"
import { CategorySelect } from "../../components/CategorySelect"
import { Feather } from "@expo/vector-icons"
import { theme } from "../../global/styles/theme"
import { SmallInput } from "../../components/SmallInput"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { ModalView } from "../../components/ModalView"
import { Guilds } from "../Guilds"
import { GuildProps } from "../../components/Guild"
import { GuildIcon } from "../../components/GuildIcon"
import uuid from "react-native-uuid"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { COLLECTION_APPOINTMENTS } from "../../global/database"
import { useNavigation } from "@react-navigation/native"


export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    const [day, setDay] = useState("");
    const [month,setMonth] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [description, setDescription] = useState("");

    const navigation = useNavigation();

    function hanldeOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function hanldeCloseGuilds() {
        setOpenGuildsModal(false);
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    function handleGuildsSelect(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} as ${hour}: ${minute}h`,
            description
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));
        
        navigation.navigate("Home");
    
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Background>
                <ScrollView>
                    <Header title="Agendar partida" />

                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                        Categoria
                    </Text>

                    <CategorySelect hasCheckBox setCategory={handleCategorySelect} categorySelected={category} />

                    <View style={styles.form}>
                        <RectButton onPress={hanldeOpenGuilds}>
                            <View style={styles.select}>
                                {guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> : <View style={styles.image} />}
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : "Selecione um servidor"}
                                    </Text>
                                </View>

                                <Feather name="chevron-right" color={theme.colors.heading} size={18} />

                            </View>
                        </RectButton>


                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Dia e mes
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setDay} />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} onChangeText={setMonth}/>
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Horario
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setHour} />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} onChangeText={setMinute}/>
                                </View>
                            </View>

                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>
                        <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} onChangeText={setDescription} />

                        <View style={styles.footer}>
                            <Button titlle="Agendar" onPress={handleSave} />
                        </View>
                    </View>
                </ScrollView>
            </Background>

            <ModalView visible={openGuildsModal} closeModal={hanldeCloseGuilds}>
                <Guilds handleGuildsSelect={handleGuildsSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}