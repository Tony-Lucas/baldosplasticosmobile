import React, { useState } from "react"
import { TouchableOpacity, View, Text, TouchableHighlight } from "react-native"
export default function Dropdown(props) {

    const [showDrop, setShowDrop] = useState(false)

    return (

        <View style={{ flexDirection: "column" ,width:"65%",}}>
            <View>
                <Text style={{ fontFamily: "Ubuntu-Regular" }} onPress={() => console.log("alouuu")}>
                    {props.dropdownValue}
                </Text>
            </View>
        </View>

    )
}