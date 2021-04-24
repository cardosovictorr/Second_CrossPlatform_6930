// 5 : Milk Screen Component:

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
//import { Dimensions } from "react-native";
//const screenWidth = Dimensions.get("window").width;




export default function Milk({ navigation }) {
    const [milkQuantity, setMilkQuantity] = useState('')
    const [milkCapacity, setMilkCapacity] = useState('')
    const [milkParLevel, setMilkParLevel] = useState('')

    const CalculateButton = ({ title, size, backgroundColor }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            //onPress={onPress}
            style={[
                styles.appButtonContainer,
                backgroundColor && { backgroundColor }
            ]}
        >
            <Text style={[styles.appButtonText, size === "md" && { fontSize: 14 }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );

    function showGraph() {
        return (

            <View style={styles.container}>
                <Text style={styles.textProduct}>MILK</Text>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    178,
                                    202,
                                    189,
                                    198,
                                    167,
                                    179
                                    // Math.random() * 100,
                                    // Math.random() * 100,
                                    // Math.random() * 100,
                                    // Math.random() * 100,
                                    // Math.random() * 100,
                                    // Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    //width={Dimensions.get("window").width} // from react-native
                    width={350}
                    height={200}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 15
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Milk Quantity"
                        onChangeText={setMilkQuantity}
                        text={milkQuantity}>
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Milk Capacity"
                        onChangeText={setMilkCapacity}
                        text={milkCapacity}>
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Milk ParLevel"
                        onChangeText={setMilkParLevel}
                        text={milkParLevel}>
                    </TextInput>
                    <CalculateButton
                        title="Calculate" backgroundColor="#e26a00"
                    />
                </View>




            </View>
        )
    }

    return (
        <>
            { showGraph()}
        </>
    );
}

// const chartConfig = {
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#08130D",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false // optional
// };

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B3D6F0",
        flex: 1,
        flexDirection: "column",
        //justifyContent: "space-around",
        alignItems: "center",
    },
    contentProduct: {
        elevation: 8,
        backgroundColor: "#B3D6F0",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        height: 550,
        width: 350,
        alignItems: "center"
    },
    textProduct: {
        fontSize: 24,
        color: "#585858",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    inputParent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        //alignItems: "center",
    },
    input: {
        height: 40,
        margin: 12,
        backgroundColor: "#fff",
        borderRadius: 15,
        width: 150,
        elevation: 8,

    },
    inputCommand: {
        fontSize: 14,
        color: "#585858",
        fontWeight: "bold",
    },
    appButtonContainer: {
        elevation: 8,
        borderRadius: 15,
        paddingVertical: 10,
        height: 40,
        width: 175,
        alignItems: "center"
    },
    appButtonText: {
        //fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
});