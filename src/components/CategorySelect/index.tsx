import React from "react"
import { ScrollView } from "react-native"
import { categories } from "../../utils/categories"
import { styles } from "./styles"


export function CategorySelect() {
    return (
        <ScrollView 
            style={styles.container} horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }} 
        >
            {
                categories.map()
            }

        </ScrollView>


    )
}