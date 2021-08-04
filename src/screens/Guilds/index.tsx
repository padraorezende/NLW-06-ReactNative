import React from "react";
import {View, FlatList} from "react-native"
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

export function Guilds(){
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
                <Guild  data={item}/>
            )} ItemSeparatorComponent={()=> <ListDivider/>} 
            showsVerticalScrollIndicator={false}
            style={styles.guilds}/>
        </View>
    )
}