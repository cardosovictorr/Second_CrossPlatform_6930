// 7 : Coffee Screen Component:

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";


export default function Coffee({ navigation }) {
    const [coffeeQuantity, setCoffeeQuantity] = useState('')
    const [coffeeCapacity, setCoffeeCapacity] = useState('')
    const [coffeeParLevel, setCoffeeParLevel] = useState('')

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
                <Text style={styles.textProduct}>COFFEE</Text>
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
                        placeholder="Coffee Quantity"
                        onChangeText={setCoffeeQuantity}
                        text={coffeeQuantity}>
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Coffee Capacity"
                        onChangeText={setCoffeeCapacity}
                        text={coffeeCapacity}>
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Coffee ParLevel"
                        onChangeText={setCoffeeParLevel}
                        text={coffeeParLevel}>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DBCAC6",
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