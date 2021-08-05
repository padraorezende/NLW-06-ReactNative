import React from "react";
import {View, FlatList} from "react-native"
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

type Props = {
    handleGuildsSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildsSelect}: Props){
    const guilds = [
        {
            id:"1",
            name: "Lendarios",
            icon: null,
            owner: true
        }
    ]


    return(
        <View style={styles.container}>
            <FlatList data={guilds} keyExtractor={item=> item.id} renderItem={({item})=>(
                <Guild  data={item} onPress={()=> handleGuildsSelect(item)}/>
            )} ItemSeparatorComponent={()=> <ListDivider isCentered/>} 
            showsVerticalScrollIndicator={false}
            style={styles.guilds} contentContainerStyle={{ paddingBottom: 68, paddingTop:103 }}
            ListHeaderComponent={()=> <ListDivider isCentered/>}/>
        </View>
    )
}