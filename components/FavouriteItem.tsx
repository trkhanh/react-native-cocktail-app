import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//Todo: dig to this
import AsyncStorage from "@react-native-community/async-storage";


function onRemoveButtonPress(input: any) {
    let drinkName = Object.values(input)[0];

    AsyncStorage.getItem("favouritesArray").then((favouritesArray) => {
        const favouritesArrayDecoded = favouritesArray
            ? JSON.parse(favouritesArray)
            : [];
        //remove drink
        let index = favouritesArrayDecoded.indexOf(drinkName);
        favouritesArrayDecoded.splice(index, 1);
        AsyncStorage.setItem(
            "favouritesArray",
            JSON.stringify(favouritesArrayDecoded)
        );
    });
}

export default function FavouriteItem({ name, preview }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.viewBtn} onPress={() => preview({ name })}>
                    <Text style={styles.btnText}>View</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.removeBtn}
                    onPress={() => {
                        onRemoveButtonPress(name);
                    }}
                >
                    <Text style={styles.btnText}>Remove</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontFamily: "productSans-regular",
        fontSize: 30,
        marginTop: 10,
        marginLeft: 12,
    },
    container: {
        borderColor: "grey",
        borderWidth: 1,
        backgroundColor: "#f2f7f4",
        margin: 10,
        marginBottom: 5,
        borderRadius: 5,
    },
    btnContainer: {
        borderColor: "black",
        display: "flex",
        flexDirection: "row",
    },
    removeBtn: {
        backgroundColor: "#ff3d54",
        flexGrow: 1,
        padding: 10,
        borderRadius: 3,
        margin: 10,
        marginLeft: 5,
    },
    viewBtn: {
        backgroundColor: "#50C878",
        flexGrow: 1.2,
        padding: 10,
        borderRadius: 3,
        margin: 10,
        marginRight: 5,
    },
    btnText: {
        fontFamily: "productSans-regular",
        fontSize: 20,
        textAlign: "center",
    },
});