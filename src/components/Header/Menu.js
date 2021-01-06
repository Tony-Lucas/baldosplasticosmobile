import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function (props) {
    return (
        <View style={{ flexGrow: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", alignItems: "center", paddingTop: 14, paddingBottom: 14, paddingLeft: 25, paddingRight: 25, backgroundColor: "#0079FF" }}>
            <Text style={{ fontSize: 20, color: "white", fontFamily: "Ubuntu-Bold" }}>{props.titulo}</Text>
            <Text style={{ alignSelf: "flex-end" }} onPress={props.toggleDrawer}>
                <Svg
                    width={31}
                    height={31}
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <Path
                        d="M3.875 10.333h23.25a1.292 1.292 0 000-2.583H3.875a1.292 1.292 0 000 2.583zm23.25 10.334H3.875a1.292 1.292 0 000 2.583h23.25a1.292 1.292 0 000-2.583zm0-6.459H3.875a1.291 1.291 0 100 2.584h23.25a1.292 1.292 0 000-2.584z"
                        fill="#fff"
                    />
                </Svg>
            </Text>

        </View>
    )
}
